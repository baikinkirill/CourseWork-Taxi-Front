import { Component, Prop, Vue } from 'vue-property-decorator';
import TestComponent from '../../components/TestComponent/TestComponent.vue';
import MainContainer from '../../components/MainContainer/MainContainer.vue';
import { getState, setState } from '../../store/StateWorker';
import getToken, { saveToken } from '@/services/TokenManager';
import registerUser from '../../services/registerUser';

@Component({
 components: {
  TestComponent,
  MainContainer,
 },
})
export default class Registration extends Vue {
 private state = getState();
 public login = '';
 public password = '';
 public firstName = '';
 public lastName = '';
 @Prop() private route!: string;

 constructor() {
  super();
 }

 async onButtonClick(event: any) {
  setState({ loading: true, error: '' });
  try {
   const obj: any = await registerUser(
    this.login,
    this.password,
    this.firstName,
    this.lastName
   );
   saveToken(obj.response.token);
   this.state.loading = false;
   this.$router.push('home');
  } catch (e) {
   this.state.loading = false;
   setState({ error: e });
  }
 }
}
