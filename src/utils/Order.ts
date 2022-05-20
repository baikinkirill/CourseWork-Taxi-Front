/* eslint-disable */

import getOrders from '@/services/getOrders';
import { OrderObject } from '@/types/Order';
import { OrderStatus } from '@/enums/OrderStatus';
import getToken from '@/services/TokenManager';

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

 init(order: OrderObject) {
  this.clientId = order.clientId;
  this.cost = order.cost;
  this.driverId = order.driverId;
  this.endTime = order.endTime;
  this.fromAddress = order.fromAddress;
  this.id = order.id;
  this.startTime = order.startTime;
  this.status = order.status;
  this.toAddress = order.toAddress;
 }

 constructor() {}

 async initById(id: number) {
  let obj = <OrderObject>(await getOrders('id', id + ''))[0];
  this.clientId = obj.clientId;
  this.cost = obj.cost;
  this.driverId = obj.driverId;
  this.endTime = obj.endTime;
  this.fromAddress = obj.fromAddress;
  this.id = obj.id;
  this.startTime = obj.startTime;
  this.status = obj.status;
  this.toAddress = obj.toAddress;
 }

 toRequestString() {
  let obj: any = JSON.parse(JSON.stringify(this));
  console.log(obj);

  return Object.keys(this)
   .map((e) => {
    if (obj[e]) return `&${e}=${obj[e].toString()}`;
    else return '';
   })
   .join('');
 }

 toObject() {
  return { ...this };
 }

 // Не в сервисах потому что я устал (2:33 ночи)

 done() {
  return fetch(
   process.env.VUE_APP_API_HOST +
    `/orders/complete?token=${getToken()}&status=completed`,
   {
    method: 'GET',
   }
  );
 }

 subscribe() {
  return new Promise((resolve, reject) => {
   let wait = false;
   let interval = setInterval(() => {
    if (!wait) {
     wait = true;
     console.log(this);
     getOrders('id', this.id.toString()).then((e) => {
      wait = false;
      if (e.length === 0) {
       resolve('');
       wait = true;
       clearInterval(interval);
      }
      if (typeof e === 'object') {
       if (e[0].status !== this.status) {
        wait = true;
        clearInterval(interval);
        resolve(e[0].status);
        return;
       }
      }
     });
    }
   }, 1500);
  });
 }
}
