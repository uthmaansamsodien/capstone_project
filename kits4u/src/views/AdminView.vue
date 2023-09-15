<template>
    <div>
        <div id="style_table" class="container">
            <h1 class="workhead headprod"><ins>WORKSPACE</ins></h1>
            <button class="btnsort">Sort <span class="bi bi-filter"></span></button>
            <br/>
            <br/>
           <addProductComp/> 
            <br/>
            <br/>

                <table class="table table-hover" id="table">
                <thead class="head">
                <tr>
                    <th id="id">ID</th>
                    <th id="club">Club</th>
                    <th id="info">Info</th>
                    <th id="brand">Brand</th>
                    <th id="price">Price (ZAR)</th>
                    <th id="prodImg">Image</th>
                    <th id="edit">Update</th> 
                    <th id="del" >Delete</th>
                </tr>
              </thead>
              <tbody id="product-table">
                <tr v-for="product in products" :key="product.prodID">
                    <td id="id">{{product.prodID}}</td>
                    <td id="club">{{ product.prodName }}</td>
                    <td id="info">{{ product.prodInfo}}</td>
                    <td id="brand">{{ product.prodBrand}}</td>
                    <td id="price">{{ product.prodPrice}}</td>                    
                    <td id="prodImg"><img class="Img" :src="product.prodImg" :alt="products.prodName" style="width: 13.5rem"></td>
                    <td id="edit"><button class="edit"> edit <span  class="bi bi-pencil-fill"></span></button></td>
                    <!-- <td id="del" ><button class="del bi bi-trash3"> delete</button></td> -->
                    <td><button  type="button" class="edit" @click="deleteProduct(product.prodID)">delete <span class="bi bi-trash3"></span>
                    </button></td>
                  </tr>
              </tbody>
              </table>
           </div>
           <h1 class="headprod"><ins>USERS</ins></h1>
           <br/>
           <table class="table table-hover" id="table">
            <thead class="head">
            <tr>
                <th id="id">ID</th>
                <th id="club">Name</th>
                <th id="info">Surname</th>
                <th id="brand">Role</th>
                <th id="price">Email</th>
                <th id="prodImg">User Image</th>
                <th id="update">update</th>
                <th id="delete">delete</th>
              </tr>
          </thead>
          <tbody id="product-table">
            <tr v-for="user in users" :key="user.userID">
                <td id="id">{{user.userID}}</td>
                <td id="club">{{ user.userName }}</td>
                <td id="info">{{ user.userSurname}}</td>
                <td id="brand">{{ user.userRole}}</td>
                <td id="price">{{ user.userAdd}}</td>                    
                <td id="prodImg"><img class="Img" :src="user.userImg" :alt="user.firstName" style="width: 13.5rem"></td>
                <td id="edit"><button class="edit"> edit <span  class="bi bi-pencil-fill"></span></button></td>
                <!-- <td id="del" ><button class="del bi bi-trash3"> delete</button></td> -->
                <td><button  type="button" class="edit" @click="deleteUser(users.userID)">delete <span class="bi bi-trash3"></span>
                </button></td>
              </tr>
          </tbody>
          </table>
    </div>
</template>

<script>
      import SpinnerCompVue from "@/components/SpinnerComp.vue";
      import addProductComp from "@/components/addProductComp.vue"
//   import UserComp from "@/components/";
export default {
  components: {
    SpinnerCompVue,
    addProductComp
    // UserComp,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },

    users(){
      return this.$store.state.users;
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteProduct(prodID) {
        this.$store.dispatch("DeleteProducts", prodID)
      }}
};  
</script>

<style scoped>
.workhead{
    font-size:5rem;
}
.edit{
        background-color: #303841;
        color: gainsboro;
        border-radius: .8rem;
}
.del{
    background-color: #303841;
    color: gainsboro;
    border-radius: .8rem;
}
.btnsort{
    background-color: #303841;
    color: gainsboro;
    border-radius: .4rem;
}

</style>