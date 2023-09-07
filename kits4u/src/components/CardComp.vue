<template>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center gap-5" v-if="products">
          <div
            v-for="product in products"
            class="card"
            style="width: 18rem"
            :key="product.prodID"
          >
            <img
              :src="product.prodImg"
              class="card-img-top"
              id="img"
              :alt="product.prodName"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">
                 {{ product.prodInfo }}
              </p>
              <p class="card-text">
                Brand: {{ product.prodBrand }}
              </p>
              <p class="card-text">
                  R {{ product.prodPrice }}
              </p>
              <p class="card-text">
                   {{ product.prodImg  }}
              </p>
            </div>
            </div>
        </div>
        <div v-else class="row">
          <SpinnerCompVue />
        </div>
      </div>
    </div>
  </template>
  <script>
  import SpinnerCompVue from "@/components/SpinnerComp.vue";
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
    },
    components: {
      SpinnerCompVue,
    },
  };
  </script>
  <style scoped>
  
    #img{
      aspect-ratio: 1.9/2.1
    }
  </style>
    