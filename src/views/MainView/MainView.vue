<template>
 <div :class="$style.mapParent">
  <Menu :show="state.menuShow">fdsf</Menu>
  <div @click="showMenu" :class="$style.openMenuButton">
   <i class="icon icon-menu"></i>
  </div>
  <div :class="$style.card" :hidden="!state.address">
   <div :class="$style.cardContent">
    <at-input v-model="state.address" :disabled="true" size="large"></at-input>
    <div :class="$style.costParent">
     <h3>Стоимость:</h3>
     <h3><span>3500р</span></h3>
    </div>
    <div :class="$style.buttonContainer">
     <at-button
      :disabled="state.loading"
      :loading="state.loading"
      size="large"
      type="primary"
      >Заказать
     </at-button>
     <at-button
      :disabled="state.loading"
      :loading="state.loading"
      hollow
      size="large"
      type="error"
      @click="deleteAddress"
      >Отмена
     </at-button>
    </div>
   </div>
  </div>
  <yandex-map
   :controls="settings.controls"
   :coords="state.selectedPoint"
   :options="settings.options"
   :settings="settings"
   :zoom="16"
   style="height: 100vh"
   @click="onClick">
   <ymap-marker
    v-if="state.address"
    :coords="state.selectedPoint"
    marker-id="123" />
  </yandex-map>
 </div>
</template>

<script lang="ts" src="./MainView.ts"></script>

<style lang="scss" module src="./MainView.module.scss"></style>
