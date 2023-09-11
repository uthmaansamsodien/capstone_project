<template>
    <div class="container">
      <div class="row">
        <form class="form" @submit.prevent="login">
          <div class="form-control-wrapper">
            <span class="inline">
              <input
                type="email"
                class="form-control"
                placeholder="email"
                v-model="payload.userAdd"
                required
              />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span class="inline">
              <input
                type="password"
                class="form-control"
                placeholder="password"
                minlength="4"
                maxlength="12"
                v-model="payload.userPass"
              />
            </span>
          </div>
          <div class="form-control-wrapper">
            <div class="col">
              <button type="submit" class="btn btn-success">
                Log In
                <span
                  v-show="spinner"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
          <div class="form-control-wrapper">
            <div class="row">
              <div class="col">
                <router-link class="d-flex justify-content-center text-decoration-none" to="/register"
                  >Sign Up</router-link
                >
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  import { useCookies } from "vue3-cookies";
  const { cookies } = useCookies();
  export default {
    components: {
    },
    data() {
      return {
        payload: {
          userAdd: "",
          userPass: "",
        },
        message: null,
      };
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      spinner() {
        return this.$store.state.spinner;
      },
    },
    methods: {
      login() {
        this.$store.dispatch("login", this.payload);
      },
      // logout() {
      //   this.$store.dispatch("logout", this.payload)
      // },
    },
    beforeCreate() {
      this.$store.dispatch('fetchUsers')
    },
      mounted() {
      console.log(cookies.get("GrantedUserAccess"));
    }
  };
  </script>
  <style scoped>
  </style>