import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
  state: {
   loading: false,
   route: undefined,
   ACCESS_TOKEN: undefined,
   selectedPoint: ['55.669986', '37.480409'],
   address: '',
   user: {
    login: undefined,
    password: undefined,
   },
  },
 },
 getters: {},
 mutations: {
  setState: (state, newState) => {
   Vue.set(state.state, newState[0], newState[1]);
  },
 },
 actions: {
  setState: (state, newState) => {
   for (const i in newState) state.commit('setState', [i, newState[i]]);
  },
 },
 modules: {},
});
