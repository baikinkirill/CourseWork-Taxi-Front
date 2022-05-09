<template>
 <div :class="$style.parent">
  <div :class="$style.userData">
   <img src="/icons/logo.png" alt="" />
   <h2>Иванов Иван</h2>
  </div>
  <div :class="$style.content">
   <ListButton
    @click="$router.push('orders')"
    title="Текущие заказы"
    icon="icons/list.png" />
   <hr />
   <ListButton
    @click="$router.push('history')"
    title="История заказов"
    icon="icons/history.png" />
  </div>
 </div>
</template>

<script lang="ts" src="./Account.ts"></script>
<style module src="./Account.module.scss" lang="scss"></style>
