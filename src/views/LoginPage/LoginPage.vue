<template>
 <MainContainer>
  <div :class="$style.parent" :loading="state.loading ? 'true' : 'false'">
   <h1>Авторизация</h1>
   <img :class="$style.logo" alt="" src="/icons/logo.png" />
   <div v-if="state.error" :class="$style.errorContainer">
    <at-alert :message="state.error" type="error"></at-alert>
   </div>
   <div :class="$style.inputContainer">
    <at-input
     v-model="state.user.login"
     :disabled="state.loading"
     placeholder="Логин"
     size="large"
     type="login"></at-input>
    <at-input
     v-model="state.user.password"
     :disabled="state.loading"
     placeholder="Пароль"
     size="large"
     type="password"></at-input>
   </div>
   <at-button
    :loading="state.loading"
    size="large"
    type="primary"
    @click="onButtonClick"
    >Войти
   </at-button>
  </div>
 </MainContainer>
</template>

<script lang="ts" src="./LoginPage.ts"></script>
<style lang="scss" module scoped src="./LognPage.module.scss" />
