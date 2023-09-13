<template>
    <div class="container">
      <div class="row" style="margin-top: 3rem display: flex; justify-content: center; align-items: center;">
        <div class="card-head col-12 col-md-6">
          <img
            :src="$route.query.prodImg"
            :alt="$route.query.prodName"
            loading="lazy"
          />
        </div>
          <div class="card-body col-12 col-md-6">
            <h5 class="card-title" style="width: 100%; margin-top: 4rem;">{{ $route.query.prodName }}</h5>
            <h5 class="card-title" style="width: 100%;"> R {{ $route.query.prodPrice }}</h5>
              <p class="card-text" style="width: 100%;">{{ $route.query.prodInfo }}</p>
              <button class="card-btn" @click="addToCart(product)">Buy Now</button>
          </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ["prodID"],
    computed: {
      product () {
        return this.$store.state.product
      }
    }
  }
  </script>
  <style scoped>
h5 {
    margin-bottom: 3rem;
}
.card-body{
  height:auto;
}
img {
 object-fit: contain;
}
@media screen and (max-width: 500px) {
  img {
    width: 15rem;
    height: 17rem;
    margin-top: 2rem;
  }
  .card-body{
    height: 43vh;
  }
}
</style>









