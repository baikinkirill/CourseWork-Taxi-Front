<template>
 <div :class="$style.menuContainer" :show="show">
  <div :class="$style.hiddenBlock" @click="hideMenu"></div>
  <div :class="$style.menuParent">
   <div @click="openHistory">
    <span><img src="/icons/history.png" alt="" /></span
    ><span>История поездок</span>
   </div>
   <hr />
   <div>
    <span><i class="icon icon-settings" /></span>Параметры
   </div>
  </div>
 </div>
</template>

<script lang="ts" src="./Menu.ts"></script>
<style lang="scss" module src="./Menu.module.scss"></style>
