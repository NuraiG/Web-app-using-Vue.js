export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
    const storageData = JSON.stringify(state.coaches);
    localStorage.setItem("coaches", storageData);
  },
};
