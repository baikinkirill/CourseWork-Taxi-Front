import { Component, Prop, Vue } from 'vue-property-decorator';
import TestComponent from '../../components/TestComponent/TestComponent.vue';
import MainContainer from '../../components/MainContainer/MainContainer.vue';
import { getState, setState } from '../../store/StateWorker';
import getToken from '@/services/TokenManager';

@Component({
 components: {
  TestComponent,
  MainContainer,
 },
})
export default class LoginPage extends Vue {
 private state = getState();
 public login="";
 public password="";
 @Prop() private route!: string;

 constructor() {
  super();
 }

 async onButtonClick(event: any) {
  setState({ loading: true, error: '' });
  try{
   await getToken(this.login, this.password)
   this.state.loading = false;
   this.$router.push('home');
  }catch (e){
   this.state.loading=false;
   setState({error:e})
  }
 }
}
