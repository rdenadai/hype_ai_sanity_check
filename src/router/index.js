import { createRouter, createWebHistory } from "vue-router";
import QuestionaireView from "../views/QuestionaireView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: QuestionaireView,
    },
    {
      path: "/:id/:score",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
