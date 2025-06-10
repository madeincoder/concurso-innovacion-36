import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    user: null,
    dashboardData: [],
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setDashboardData(data) {
      this.dashboardData = data;
    },
  },
});
