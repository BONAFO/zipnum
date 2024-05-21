import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  { path: "/", component: () => import("@/components/Home.vue") },
  { path: "/:t", component: () => import("@/components/Home.vue") },
];

export const BASE_URL = "/#/";



const deploy = "github";

let router;

router = createRouter({
  history: createWebHashHistory(BASE_URL),
  routes,
});

export const redirect =(uri="")=>{
  window.location.href = window.origin + BASE_URL + uri;
  window.location.reload()
}



export default router;
