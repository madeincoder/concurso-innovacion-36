import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ReportsPage from "../views/ReportsPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RecoverEmail from "../views/RecoverEmail.vue";
import RecoveryPassword from "../views/RecoveryPassword.vue";

const routes = [
  { path: "/", name: "Login", component: LoginPage },
  { path: "/recovery-email", name: "RecoverEmail", component: RecoverEmail },
  { path: "/recovery-password", name: "RecoveryPassword", component: RecoveryPassword },
  { path: "/test", name: "Home", component: HomePage },
  { path: "/reports", name: "Reports", component: ReportsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
