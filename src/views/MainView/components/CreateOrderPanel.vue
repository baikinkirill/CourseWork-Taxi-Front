<template>
 <div :class="$style.createOrderPanel">
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
    @click="$emit('createTask')"
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
</template>

<script>
import { getState, setState } from '@/store/StateWorker.ts';

export default {
 name: 'CreateOrderPanel',
 data: () => {
  return {
   state: getState(),
  };
 },
 methods: {
  deleteAddress: () => {
   setState({ address: '' });
  },
 },
};
</script>

<style lang="scss" module src="../MainView.module.scss"></style>
