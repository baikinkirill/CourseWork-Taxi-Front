import { Component, Prop, Vue } from 'vue-property-decorator';
import { getState, setState } from '../../store/StateWorker';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import getAddressByCoords from '@/services/getAddressByCoords';
import Menu from '../../components/Menu/Menu.vue';
import CreateOrderPanel from './components/CreateOrderPanel.vue';
import DriverWaiting from './components/DriverWaiting.vue';
import ActiveTask from './components/ActiveTask.vue';
import Order from '@/utils/Order';
import { OrderStatus } from '@/enums/OrderStatus';
import getToken, { getId, parseJwt } from '@/services/TokenManager';
import createOrder from '@/services/createOrder';
import deleteOrder from '@/services/deleteOrder';
import getUser from '@/services/getUser';
import { OrderObject } from '@/types/Order';

@Component({
 components: {
  yandexMap,
  ymapMarker,
  Menu,
  CreateOrderPanel,
  DriverWaiting,
  ActiveTask,
 },
})
export default class LoginPage extends Vue {
 private state = getState();
 @Prop() private route!: string;
 @Prop() private userName!: string;
 activeOrder: Order | undefined = new Order();
 tabId = 0;

 private settings = {
  apiKey: process.env.VUE_APP_YANDEX_TOKEN,
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
  controls: [],
  options: {
   minZoom: 5,
   maxZoom: 19,
   suppressObsoleteBrowserNotifier: true,
   suppressMapOpenBlock: true,
  },
 };

 cancelTask() {
  deleteOrder(getId());
  this.tabId = 0;
 }

 async created() {
  const token = getToken();
  if (typeof token === 'string') {
   const jwt = parseJwt(token);
   if (jwt.aud[0] === 'driver') {
    this.$router.push('account');
   } else {
    const user = await getUser();
    const order = new Order();
    if (user.activeOrder) {
     await order.initById((<OrderObject>user.activeOrder).id);
     this.activeOrder = order;
     setState({
      user: user,
      activeOrder: order,
      address: order.toAddress,
     });
     if (user.activeOrder) {
      if (order.status === OrderStatus.CREATED) {
       this.tabId = 1;
       order.subscribe().then((r) => {
        if (r === OrderStatus.ACTIVE) {
         this.tabId = 2;
        }
       });
      } else if (order.status === OrderStatus.ACTIVE) {
       this.tabId = 2;
       order.subscribe();
      }
     }
    }
   }
  }
 }

 createTask() {
  const ord = new Order();
  ord.clientId = getId();
  ord.startTime = Math.ceil(new Date().getTime() / 1000);
  ord.toAddress = this.state.address;
  ord.fromAddress = 'Москва, пр. Вернадского 78';
  ord.cost = 3500;
  setState({ activeOrder: ord });

  createOrder(ord).then((r) => {
   setState({ activeOrder: ord });
   const order = new Order();
   order.init(r);
   console.log(order.toObject());
   order.subscribe().then((r) => {
    if (r === OrderStatus.ACTIVE) {
     this.tabId = 2;
    }
   });
  });

  this.tabId = 1;
 }

 setActiveTask() {
  this.tabId = 2;
 }

 done() {
  this.tabId = 3;
 }

 constructor() {
  super();
 }

 async onClick(e: any) {
  if (this.tabId !== 2) {
   setState({ loading: true, address: 'Loading...' });
   this.state.selectedPoint = e.get('coords');
   const result = await getAddressByCoords(e.get('coords'));
   setState({ loading: false, address: result });
  }
 }

 showMenu = () => {
  setState({ menuShow: true });
 };
}
