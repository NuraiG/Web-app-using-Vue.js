import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import CoachDetails from "./pages/coaches/CoachDetails.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/request/ContactCoach.vue";
import RequestReceived from "./pages/request/RequestReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: routerHistory,
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [{ path: "contact", component: ContactCoach }],
    },
    { path: "/register", component: CoachRegistration },
    { path: "/request", component: RequestReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
