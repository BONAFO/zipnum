export default {
  state: {
    API_NAME: "F3-1",
    custom_style: [
      {
        popup: "pop-up-cus",
        title: "title-cus",
        input: "input-cus",
        confirmButton: "confirm-cus",
        cancelButton: "cancel-cus",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getAPI_NAME({ API_NAME }) {
      return API_NAME;
    },
    getCustom_style({ custom_style }) {
        return custom_style;
      },
  },
};
