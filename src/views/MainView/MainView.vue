<template>
 <div :class="$style.mapParent">
  <div :class="$style.openMenuButton">
   <i class="icon icon-menu"></i>
  </div>
  <div :class="$style.card" :hidden="!state.address">
   <div :class="$style.cardContent">
    <at-input v-model="state.address" size="large" :disabled="true"></at-input>
    <div :class="$style.costParent">
     <h3>Стоимость:</h3>
     <h3><span>3500р</span></h3>
    </div>
    <div :class="$style.buttonContainer">
     <at-button
      :loading="state.loading"
      :disabled="state.loading"
      type="primary"
      >Заказать</at-button
     >
     <at-button
      @click="deleteAddress"
      :loading="state.loading"
      :disabled="state.loading"
      type="error"
      hollow
      >Отмена</at-button
     >
    </div>
   </div>
  </div>
  <yandex-map
   :settings="settings"
   :coords="state.selectedPoint"
   :options="settings.options"
   :controls="settings.controls"
   :zoom="16"
   @click="onClick"
   style="height: 100vh">
   <ymap-marker
    v-if="state.address"
    :coords="state.selectedPoint"
    marker-id="123" />
  </yandex-map>
 </div>
</template>

<script lang="ts" src="./MainView.ts"></script>

<style module lang="scss" src="./MainView.module.scss"></style>
