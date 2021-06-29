import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state() {
    return {
      requests: JSON.parse(localStorage.getItem("requests")) || [],
    };
  },
  mutations,
  actions,
  getters,
  namespaced: true,
};
