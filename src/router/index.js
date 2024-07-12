import { createRouter, createWebHistory } from "vue-router";
import QuestionaireView from "../views/QuestionaireView.vue";
import ProfileView from "../views/ProfileView.vue";
import { useLanguageStore } from "@/stores/language";
import { data } from "../constants.js";

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

router.beforeEach((to, from, next) => {
  const store = useLanguageStore();

  const profile =
    data?.[store.language]?.profiles?.find(
      (profile) => profile.id === to.params.id
    ) ?? {};

  document.getElementById("twitter:card").setAttribute("content", profile.name);
  document
    .getElementById("twitter:site")
    .setAttribute(
      "content",
      `https://www.aihypesanitycheck.tech/${profile.id}/${to.score}`
    );
  document
    .getElementById("twitter:title")
    .setAttribute("content", profile.name);
  document
    .getElementById("twitter:description")
    .setAttribute("content", profile.description);
  document
    .getElementById("twitter:image")
    .setAttribute(
      "content",
      `https://www.aihypesanitycheck.tech/assets/profile/${profile.id}.png`
    );
  next();
});

export default router;
