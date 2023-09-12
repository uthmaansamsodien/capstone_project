import { createStore } from 'vuex'
import axios from "axios";
import sweet from "sweet-alert"
import router from "@/router"
import { useCookies } from "vue3-cookies"
import authUser from "@/services/AuthenticateUser"
const bkURL = "https://kits4u.onrender.com/";
const { cookies } = useCookies();
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    }
  },
  actions: {
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${bkURL}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
       context.commit("setMsg","An error has occured")
      }
    },

    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${bkURL}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        alert(e.message);
      }
    },

    async registerUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${bkURL}register`, payload)).data
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 3000,
          });
          //explain line  below
          context.dispatch("fetchUsers");
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: "Oops, an error occured",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit(console.log(e));
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${bkURL}login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("GrantedUserAccess", { token, msg, result });
          authUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome Back, ${result?.first_name}
              ${result?.last_name}`,
            icon: "success",
            timer: 3000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: "Oops, an error occured",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit(console.log(e));
      }
    },
    async logout(context) {
      context.commit("setUser")
      cookies.remove("GrantedUserAccess")
      router.push({ name: "login" })
    },
  }
})
  
