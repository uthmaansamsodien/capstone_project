<template>
    <div>
      <div class="container">
        <div class="row">
          <form class="form" @submit.prevent="registerUser">
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="name"
                  class="form-control"
                  placeholder="First Name"
                  v-model="payload.userName"
                  required
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="surname"
                  class="form-control"
                  placeholder="Last Name"
                  v-model="payload.userSurname"
                  required
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
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
                  placeholder="Password"
                  minlength="4"
                  maxlength="12"
                  v-model="payload.userPass"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Role"
                  v-model="payload.userRole"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="text"
                  class="form-control"
                  v-model="payload.userImg"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <div class="col">
                <button type="submit" class="btn btn-danger">
                  Submit
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        payload: {
          userName: "",
          userSurname: "",
          userAdd: "",
          userPass: "",
          userRole: "",
          userImg: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png",
        },
      };
    },
    methods: {
      registerUser() {
        this.$store.dispatch("registerUser", this.payload);
      },
    },
  };
  </script>
  <style scoped>
  </style>