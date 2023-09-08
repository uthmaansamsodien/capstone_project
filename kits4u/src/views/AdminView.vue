<template>
    <div>
        <div id="style_table" class="container">
            <h1><ins>WORKSPACE</ins></h1>
                <table class="table table-hover" id="table">
                <thead class="head">
                <tr>
                    <th id="id">ID</th>
                    <th id="club">Club</th>
                    <th id="info">Info</th>
                    <th id="brand">Brand</th>
                    <th id="price">Price (ZAR)</th>
                    <th id="prodImg">Image</th>
                    <th id="amount">Quantity</th>
                    <th id="del">Delete</th>
                    <th id="edit">Update</th>
                </tr>
              </thead>
              <tbody id="product-table">
                <tr v-for="product in products" :key="product.prodID">
                    <td id="id">{{product.prodID}}</td>
                    <td id="club">{{ product.prodName }}</td>
                    <td id="info">{{ product.prodInfo}}</td>
                    <td id="brand">{{ product.prodBrand}}</td>
                    <td id="price">{{ product.prodPrice}}</td>                    <td id="prodImg"><img :src="product.prodUrl" :alt="products.prodName" style="width: 13.5rem"></td>
                    <td id="del"><button class="del">delete</button></td>
                    <td id="edit"><button class="edit">edit</button></td>
                  </tr>
              </tbody>
              </table>
           </div>
           <h1><ins>USERS</ins></h1>
           <UserComp/>
    </div>
</template>

<script>
//       import SpinnerCompVue from "@/components/SpinnerComp.vue";
//   import UserComp from "@/components/";
// export default {
//   components: {
//     SpinnerCompVue,
//     UserComp,
//   },
//   computed: {
//     products() {
//       return this.$store.state.products;
//     },
//   },
//   mounted() {
//     this.$store.dispatch("fetchProducts");
//   },
// };  
</script>

<style scoped>

</style>