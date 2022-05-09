<template>
 <div :class="$style.parent">
  <div :class="$style.header">
   <div @click="$router.back()" :class="$style.button">
    <i class="icon icon-arrow-left"></i>
   </div>
   <h1>Текущие заказы</h1>
  </div>
  <div :class="$style.content">
   <ListClickButton />
   <ListClickButton />
   <ListClickButton />
  </div>
 </div>
</template>

<script lang="ts" src="./OrderList.ts"></script>
<style module src="./OrderList.module.scss" lang="scss"></style>
