<template>
 <div>
  <h4 style='display: flex; align-items: center; width: 100%; justify-content: center'>
   Поездка завершена <span style='margin-left: 10px'><img alt='' height='14px' src='/icons/complete.png' width='14px'></span>
  </h4>
  <div>
   <RaitingStars />
  </div>
  <div>
   <b>Пожалуйста, поставьте оценку</b>
   <br/>
   <br/>
  </div>
  <at-button type='confirm' @click='$emit("click")'>Закрыть</at-button>
 </div>
</template>

<script>
import RaitingStars from '@/components/RaitingStars';

export default {
 name: 'OrderComplete',
 components: { RaitingStars },
};
</script>

<style scoped>

</style>