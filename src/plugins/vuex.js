import { createStore } from "vuex";
import SAVE_VUEX from "./Vuex/Save";
import API from "./Vuex/API";

const store = createStore({
  state() {
    return {
      ...SAVE_VUEX.state,
      ...API.state,
    };
  },
  mutations: {
    ...SAVE_VUEX.mutations,
    ...API.mutations,
  },
  actions: {
    ...SAVE_VUEX.actions,
    ...API.actions,
  },
  getters: {
    ...SAVE_VUEX.getters,
    ...API.getters,
  },
});

export default store;
