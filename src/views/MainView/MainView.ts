import {Component, Prop, Vue} from 'vue-property-decorator';
import {getState, setState} from '../../store/StateWorker';
import {yandexMap, ymapMarker} from 'vue-yandex-maps';
import getAddressByCoords from '@/services/getAddressByCoords';
import TestComponent from '@/components/TestComponent/TestComponent';
import Menu from '../../components/Menu/Menu.vue';
import CreateOrderPanel from './components/CreateOrderPanel.vue'

@Component({
 components: {yandexMap, ymapMarker, Menu, CreateOrderPanel},
})
export default class LoginPage extends Vue {
 private state = getState();
 @Prop() private route!: string;
 @Prop() private userName!: string;

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

 onClick = async (e: any) => {
	setState({loading: true, address: 'Loading...'});
	this.state.selectedPoint = e.get('coords');
	const result = await getAddressByCoords(e.get('coords'));
	setState({loading: false, address: result});
 };


 showMenu = () => {
	setState({menuShow: true});
 };
}
