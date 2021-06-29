export default {
  registerCoach(context, payload) {
    const coachData = {
      id: new Date().toISOString(),
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description: payload.desc,
      hourlyRate: payload.rate,
    };
    context.commit("registerCoach", coachData);
  },
};
