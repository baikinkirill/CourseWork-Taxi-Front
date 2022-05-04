import { Vue, Component } from 'vue-property-decorator';
import ListItem from '@/components/ListItem/ListItem.vue';

@Component({
 components: {
  ListItem,
 },
})
export default class History extends Vue {

 private lists = [
  {time:"14:00",address:"fdfd",date:"Четверг",cost:"500"},
  {time:"14:00",address:"fdfd",date:"Четверг",cost:"500"},
  {time:"14:00",address:"fdfd",date:"Четверг",cost:"500"},
  {time:"14:00",address:"fdfd",date:"Четверг",cost:"500"},
 ]
}
