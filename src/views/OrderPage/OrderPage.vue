<template>
 <div :class='$style.parent'>
  <h2>Активный заказ</h2>
  <div :class='$style.content'>
   <table>
    <tbody>
    <tr>
     <td>Адрес:</td>
     <td>{{ state.activeOrder.toAddress || '' }}</td>
    </tr>
    <tr>
     <td>Время начала:</td>
     <td>{{ state.activeOrder ? (new Date(state.activeOrder.startTime*1000).toLocaleString('ru')) : ('') }}</td>
    </tr>
    <tr>
     <td>Стоимость:</td>
     <td>{{state.activeOrder.cost || 0}}</td>
    </tr>
    </tbody>
   </table>
   <at-button hollow type='success' @click='cancel'>Завершить заказ</at-button>
  </div>
 </div>
</template>

<script lang='ts' src='./OrderPage.ts'></script>
<style lang='scss' module src='./OrderPage.module.scss'></style>
