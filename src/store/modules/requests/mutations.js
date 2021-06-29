export default {
  addRequest(state, payload) {
    state.requests.push(payload);
    const storageData = JSON.stringify(state.requests);
    localStorage.setItem("requests", storageData);
  },
};
