import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {
 @Prop() private date!: string;
 @Prop() private address!: string;
 @Prop() private cost!: string;
 @Prop() private time!: string;
}
