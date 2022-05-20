<template>
 <div :class="$style.parent">
  <div :class="$style.header">
   <div @click="$router.back()" :class="$style.button">
    <i class="icon icon-arrow-left"></i>
   </div>
   <h1>Текущие заказы</h1>
  </div>
  <div :class="$style.content">
   <div
    v-if='orderList.length===0'
   >
    <h2>Тут пусто :(</h2>
   </div>
    <ListClickButton
     :router='$router'
     v-else
     v-for='obj of orderList'
     :from='obj.fromAddress'
     :to='obj.toAddress'
     :cost='obj.cost'
     :orderId='obj.id'
    />
  </div>
 </div>
</template>

<script lang="ts" src="./OrderList.ts"></script>
<style module src="./OrderList.module.scss" lang="scss"></style>
