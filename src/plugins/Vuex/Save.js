import { ref } from "vue";

export default {
  state: {
    save: ref({
      cars: [],
      coins: 0,
    }),
  },
  mutations: {
    setSave(state, newData) {
      state.save = newData;
    },
  },
  actions: {
    dispSave(state, newData) {
      state.save =  newData;
    },
  },
  getters: {
    getSave({ save }) {
      return save;
    },
  },
};
