<template>
    <div>
      <div class="container">
        <div class="row">
          <form class="form" @submit.prevent="registerUser">
            <h1 class="headprod"><ins>Register now!</ins>
            </h1>
            <br/>
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
              <div class="col-btn">
                <button type="submit" class="btn">
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
          userRole: "",
          userAdd: "",
          userPass: "",
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
  .form{
    padding: 2.5rem;
  }
  .btn{
    background-color: #303841;
    color: gainsboro;
    border-radius: .8rem;
    margin-bottom:2rem;
  }
  .btn{
    margin: 2rem;
  }
  .form-control-wrapper{
    padding:1rem;
  }
  </style>