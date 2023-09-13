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
              <p class="card-text price">
                  R {{ product.prodPrice }}
              </p>
            </div>
            <button class="card-btn">Add to cart</button>
            <router-link :to=
                      "{name: 'single',
                      params: {id: product.prodID},
                      query: {
                          prodName: product.prodName,
                          prodInfo: product.prodInfo,
                          prodBrand: product.prodBrand,
                          prodPrice: product.prodPrice,
                          prodImg: product.prodImg,
                        }
                    }" class="card-btn">View More</router-link><span>
                        </span>

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
    props: ["prodID"],
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
    :hover.price{
      color:#d72323;
    }
  </style>
    