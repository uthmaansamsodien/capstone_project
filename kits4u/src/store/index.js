import { createStore } from 'vuex'
import axios from "axios";
import sweet from "sweetalert"
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
    addProduct:null,
    product: null,
    spinner: false,
    // token: null,
    // msg: null,
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
    setAddProduct(state,data){
      state.addProduct = data
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
    async fetchProduct(context, prodID) {
      try {
        const data = await axios.get(`${bkURL}products/${prodID}`);
        context.commit('setProduct', data.results)
      } catch (e) {
        console.log(e);
      }
    },

    async addProduct( {commit} , productData) {
      try {
        const response = await axios.post(`${bkURL}product`, productData);
        commit('setAddProducts', response.data);
        console.log(response.data);
        location.reload();
      } catch (error) {
        console.error('An error occurred:', error);
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
        const {msg} = (await axios.post(`${bkURL}register`, payload)).data
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 3000,
          });
          //explain line  below
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: "Oops, an error occured",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${bkURL}login`, payload)
          ).data;
          console.log(msg, token, result);
        if (result) {
          context.commit("setUsers", { result, msg });
          cookies.set("GrantedUserAccess", { token, msg, result });
          authUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome Back, ${result?.userName}
              ${result?.userSurname}`,
            icon: "success",
            timer: 3000,
          });
          router.push({ name: 'home' });
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
    async DeleteProducts(context, prodID) {
      try {
        const response = await axios.delete(`${bkURL}product/${prodID}`);
        context.commit("setDeleteProducts", response.data);
        // Assuming setDeleteProducts mutation updates some state
        location.reload();
      } catch (e) {
        console.error("An error occurred:", e); // Log the error for debugging
        context.commit("setMsg", "An error occurred");
      }
    },
    

    // async logout(context) {
    //   context.commit("setUser")
    //   cookies.remove("GrantedUserAccess")
    //   router.push({ name: "login" })
    // },
  }
})
  
