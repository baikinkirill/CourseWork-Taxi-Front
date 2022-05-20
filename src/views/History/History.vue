<template>
 <div :class="$style.parent">
  <div :class="$style.header">
   <div @click="$router.back()" :class="$style.button">
    <i class="icon icon-arrow-left"></i>
   </div>
   <h1>История поездок</h1>
  </div>
  <div :class="$style.content">
   <ListItem
    v-for="obj of lists"
    :time="new Date(obj.startTime*1000).toLocaleTimeString('ru')"
    :date="new Date(obj.startTime*1000).toLocaleDateString('ru')"
    :address="obj.toAddress"
    :cost="obj.cost" />
  </div>
 </div>
</template>

<script lang="ts" src="./History.ts"></script>
<style lang="scss" module src="./History.module.scss"></style>
