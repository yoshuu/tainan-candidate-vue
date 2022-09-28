import { createRouter, createWebHistory } from "vue-router";
import FrontPage from "../views/FrontPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FrontPage",
      component: FrontPage,
    },
    {
      path: "/DistrictMapPage",
      name: "DistrictMapPage",

      component: () => import("@/views/DistrictMapPage.vue"),
    },
    {
      path: "/RecordOfStreetMapPage",
      name: "RecordOfStreetMapPage",

      component: () => import("@/views/RecordOfStreetMapPage.vue"),
    },
    {
      path: "/StickyNotesPage",
      name: "StickyNotesPage",

      component: () => import("@/views/StickyNotesPage.vue"),
    },
    {
      path: "/TainanThreePage",
      name: "TainanThreePage",

      component: () => import("@/views/TainanThreePage.vue"),
    },
    {
      path: "/SpeechRecordPage",
      name: "SpeechRecordPage",

      component: () => import("@/views/SpeechRecordPage.vue"),
    },
    {
      path: "/RelatedNewsPage",
      name: "RelatedNewsPage",

      component: () => import("@/views/RelatedNewsPage.vue"),
    },
  ],
});

export default router;
