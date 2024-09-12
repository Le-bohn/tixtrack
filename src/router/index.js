import { createRouter, createWebHistory } from "vue-router";
import UsersList from "@/components/UserList/UsersList.vue";
import UserDetails from "@/views/UserDetails/UserDetails.vue";
import Layout from "@/components/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/users/:id",
        component: UserDetails,
      },
    ],
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
