<template>
 <div>
  <h2>Ожидание водителя</h2>
  <div>
   <img src="/img/loadingtaxi.gif" alt="" width="150px" height="150px" />
  </div>
  <at-button
   style="width: 100%"
   hollow
   type="error"
   @click="$emit('cancelTask')"
   >Отменить</at-button
  >
 </div>
</template>

<script>
export default {
 name: 'DriverWaiting',
 props: ['test'],
};
</script>

<style scoped></style>
