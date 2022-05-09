import { Component, Prop, Vue } from 'vue-property-decorator';
import { getState, setState } from '../../store/StateWorker';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import getAddressByCoords from '@/services/getAddressByCoords';
import TestComponent from '@/components/TestComponent/TestComponent';
import Menu from '../../components/Menu/Menu.vue';
import CreateOrderPanel from './components/CreateOrderPanel.vue';
import DriverWaiting from './components/DriverWaiting.vue';
import ActiveTask from './components/ActiveTask.vue';
import Order from '@/utils/Order';

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
  this.tabId = 0;

  let order = new Order();
  order.cost = 25;
  console.log(order.cost);
 }

 createTask() {
  this.tabId = 1;
 }

 setActiveTask() {
  this.tabId = 2;
 }

 done() {
  this.tabId = 3;
 }

 async onClick(e: any) {
  setState({ loading: true, address: 'Loading...' });
  this.state.selectedPoint = e.get('coords');
  const result = await getAddressByCoords(e.get('coords'));
  setState({ loading: false, address: result });
 }

 showMenu = () => {
  setState({ menuShow: true });
 };
}
