<template>
 <div :class="$style.parent">
  <div @click="onOpen">
   <span><b>От: </b>тест</span>
   <br />
   <span><b>До: </b>тест</span>
   <h4>Стоимость: 1300</h4>
  </div>
  <transition name="fade">
   <div v-show="open" :class="$style.buttons">
    <at-button type="primary">Взять заказ</at-button>
    <at-button hollow type="error" @click="open = false">Отмена</at-button>
   </div>
  </transition>
 </div>
</template>

<script lang="ts" src="./ListClickButton.ts"></script>
<style lang="scss" module src="./ListClickButton.module.scss"></style>
