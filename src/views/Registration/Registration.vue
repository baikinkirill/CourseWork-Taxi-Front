<template>
 <MainContainer>
  <div :class='$style.parent' :loading="state.loading ? 'true' : 'false'">
   <h1>Регистрация</h1>
   <img :class='$style.logo' alt='' src='/icons/logo.png' />
   <div v-if='state.error' :class='$style.errorContainer'>
    <at-alert :message='state.error' type='error'></at-alert>
   </div>
   <div :class='$style.inputContainer'>
    <at-input
     v-model='firstName'
     :disabled='state.loading'
     placeholder='Имя'
     size='large'
    ></at-input>
    <at-input
     v-model='lastName'
     :disabled='state.loading'
     placeholder='Фамилия'
     size='large'
    ></at-input>
    <at-input
     v-model='login'
     :disabled='state.loading'
     placeholder='Логин'
     size='large'
     type='login'></at-input>
    <at-input
     v-model='password'
     :disabled='state.loading'
     placeholder='Пароль'
     size='large'
     type='password'></at-input>
   </div>
   <at-button
    :loading='state.loading'
    size='large'
    type='primary'
    @click='onButtonClick'
   >Зарегистрироваться
   </at-button>
  </div>
 </MainContainer>
</template>

<script lang='ts' src='./Registration.ts'></script>
<style lang='scss' module scoped src='./Registration.module.scss' />
