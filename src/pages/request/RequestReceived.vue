<template>
  <section>
    <base-card>
      <header><h2>Requests received</h2></header>
      <ul v-if="hasRequests">
        <request-item
          v-for="request in requestReceived"
          :key="request.id"
          :email="request.userEmail"
          :message="request.message"
          :to="request.coachId"
        ></request-item>
      </ul>
      <h3 v-if="!hasRequests">You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  components: { RequestItem },
  computed: {
    requestReceived() {
      return this.$store.getters["request/requests"];
    },
    hasRequests() {
      return this.$store.getters["request/hasRequests"];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
