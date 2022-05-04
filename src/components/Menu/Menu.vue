<template>
 <div :class="$style.menuContainer" :show="show">
  <div :class="$style.hiddenBlock" @click="hideMenu"></div>
  <div :class="$style.menuParent">
   <div :class="$style.userLogo">
    <img alt="" src="/icons/logo.png" />
    <div>
     <h3>{{ userName }}</h3>
    </div>
   </div>
   <div :class="$style.buttonsContainer">
    <ListButton @click="openHistory" title="История поездок" icon="icons/history.png"/>
    <hr />
   </div>
  </div>
 </div>
</template>

<script lang="ts" src="./Menu.ts"></script>
<style lang="scss" module src="./Menu.module.scss"></style>
