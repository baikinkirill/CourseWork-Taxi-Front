/* eslint-disable */

import getOrders from '@/services/getOrders';
import { OrderObject } from '@/types/Order';
import { OrderStatus } from '@/enums/OrderStatus';

export default class Order implements OrderObject {
 clientId: number = 0;
 cost: number = 0;
 driverId: number = 0;
 endTime: number = 0;
 fromAddress: string = '';
 id: number = 0;
 startTime: number = 0;
 status: OrderStatus = OrderStatus.CREATED;
 toAddress: string = '';

 init(
  clientId: number,
  cost: number,
  driverId: number,
  endTime: number,
  fromAddress: string,
  id: number,
  startTime: number,
  status: OrderStatus,
  toAddress: string
 ) {
  this.clientId = clientId;
  this.cost = cost;
  this.driverId = driverId;
  this.endTime = endTime;
  this.fromAddress = fromAddress;
  this.id = id;
  this.startTime = startTime;
  this.status = status;
  this.toAddress = toAddress;
 }

 constructor() {}

 async initById(id: number) {
  let obj = (await getOrders('id', id + ''))[0];
  console.log(obj);
 }

 toRequestString() {
  let obj: any = JSON.parse(JSON.stringify(this));

  return Object.keys(this)
   .map((e) => {
    return `&${e}=${obj[e].toString()}`;
   })
   .join('');
 }

 toObject() {
  return { ...this };
 }
}
