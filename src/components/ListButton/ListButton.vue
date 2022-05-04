<template>
  <div @click="$emit('click')" :class="$style.button">
     <span><img alt="" :src="icon" /></span
     ><span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "ListButton",
  props:['title','icon']
}
</script>

<style module lang="scss">
.button {
  border-radius: 15px;
  padding: 15px 10px;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  column-gap: 15px;
  font-size: 16px;

  & > span {
    display: flex;
    align-items: center;
  }

  i {
    font-size: 24px;
  }

  img {
    width: 24px;
    height: fit-content;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }

  &:active {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
}
</style>