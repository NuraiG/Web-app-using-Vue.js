<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
    </base-card>
    <router-view></router-view>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :title="area">
          <p>{{ description }}</p>
        </base-badge>
      </base-card>
    </section>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    contactLink() {
      return "/coaches/" + this.id + "/contact";
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    decription() {
      return this.selectedCoach.description;
    },
    areas() {
      return this.selectedCoach.areas;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (el) => el.id === this.id
    );
  },
};
</script>
