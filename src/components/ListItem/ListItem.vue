<template>
 <div :class="$style.parent">
  <div :class="$style.content">
   <div :class="$style.dateContainer">
    <h2 :class="$style.date">
     {{ date }}
    </h2>
    <div :class="$style.time">в {{ time }}</div>
   </div>

   <div :class="$style.addressContainer">
    <div :class="$style.address">{{ address }}</div>
    <div>
     <span :class="$style.cost">{{ cost }} руб.</span>
    </div>
   </div>
  </div>
 </div>
</template>

<script lang="ts" src="./ListItem.ts"></script>
<style lang="scss" module src="./ListItem.module.scss"></style>
