<template>
 <div v-if='driver'>
  <div style="font-size: 18px">Вас везет: <b>{{driver.firstName || ""}}</b></div>
  <img src="/icons/logo.png" alt="" width="80px" />
  <div style="text-align: left; margin-top: 15px">
   <div><b>Номер машины: </b>{{driver.car.number || ""}}</div>
   <div><b>Модель: </b>{{driver.car.model || ""}}</div>
   <div><b>Цвет: </b>{{driver.car.color || ""}}</div>
  </div>
 </div>
</template>

<script>
import { getState } from '@/store/StateWorker';
import { getUserById } from '@/services/getUser';

export default {
 name: 'ActiveTask',
 props:['order'],
 data:()=>{
  return {state:getState(),driver:null}
 },
 watch:{
  order: async function(val) {
   let driver = await getUserById(this.order.driverId)
   this.driver = driver
  }
 },
 async created() {
  try{
   let driver = await getUserById(this.order.driverId)
   this.driver=driver
  }catch (e){}
 }
};
</script>

<style scoped></style>
