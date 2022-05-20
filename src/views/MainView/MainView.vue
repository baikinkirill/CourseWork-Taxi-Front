<template>
 <div :class='$style.mapParent'>
  <Menu :show='state.menuShow' userName='Фамилия Имя'>fdsf</Menu>
  <div :class='$style.openMenuButton' @click='showMenu'>
   <i class='icon icon-menu'></i>
  </div>
  <div :class='$style.card' :hidden='!state.address'>
   <CreateOrderPanel v-show='tabId === 0' @createTask='createTask' />
   <DriverWaiting v-show='tabId === 1' @cancelTask='cancelTask' />
   <ActiveTask v-show='tabId === 2' :order='activeOrder' @cancelTask='cancelTask' />
   <OrderComplete v-show='tabId === 3' @click='tabId=0; state.address=""'/>
  </div>
  <yandex-map
   :controls='settings.controls'
   :coords='state.selectedPoint'
   :options='settings.options'
   :settings='settings'
   :zoom='16'
   style='height: 100vh'
   @click='onClick'>
   <ymap-marker
    v-if='state.address'
    :coords='state.selectedPoint'
    marker-id='123' />
  </yandex-map>
 </div>
</template>

<script lang='ts' src='./MainView.ts'></script>
<style lang='scss' module src='./MainView.module.scss'></style>
