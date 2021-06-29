<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
      <h3>
        to: <span>{{ getCoachFullName }}</span>
      </h3>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ["email", "message", "to"],
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
    getCoachFullName() {
      const coach = this.$store.getters["coaches/coaches"];
      const coach1 = coach.find((el) => el.id === this.to);
      return coach1.firstName + " " + coach1.lastName;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}
li > div {
  display: flex;
  justify-content: space-between;
}
span {
  margin: 0;
  color: #8d007a;
}
h3 {
  margin: 0;
}
a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
