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
    :time="obj.time"
    :date="obj.date"
    :address="obj.address"
    :cost="obj.cost" />
  </div>
 </div>
</template>

<script lang="ts" src="./History.ts"></script>
<style lang="scss" module src="./History.module.scss"></style>
