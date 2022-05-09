import { Vue, Component } from 'vue-property-decorator';
import ListClickButton from '@/components/ListClickButton/ListClickButton.vue';

@Component({
 components: { ListClickButton },
})
export default class OrderList extends Vue {}
