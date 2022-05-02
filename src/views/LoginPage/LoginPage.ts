import {Component, Prop, Vue} from 'vue-property-decorator';
import TestComponent from '../../components/TestComponent/TestComponent.vue';
import MainContainer from '../../components/MainContainer/MainContainer.vue';
import {getState, setState} from '../../store/StateWorker';
import getToken from '@/services/getToken';

@Component({
 components: {
	TestComponent,
	MainContainer,
 },
})
export default class LoginPage extends Vue {
 private state = getState();
 @Prop() private route!: string;

 constructor() {
	super();
 }

 onButtonClick = async (event: any) => {
  setState({loading: true, error: ''});
  const TOKEN = await getToken();
  this.state.loading = false
  this.$router.push("home")
 };
}
