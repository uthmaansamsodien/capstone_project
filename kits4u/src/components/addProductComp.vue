<template>
    <div>
        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo"><i class="bi bi-clipboard-plus"></i></button>
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel1">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addData" class="d-flex flex-column gap-5">
            <input type="text" v-model="productI.prodID" placeholder="ID" name="" id="" required>
            <input type="text" v-model="productI.prodName" placeholder="Name" name="" id="" required>
            <input type="text" v-model="productI.prodInfo" placeholder="Info" name="" id="" required>
            <input type="text" v-model="productI.prodBrand" placeholder="category" name="" id="" required>
            <input type="number" v-model="productI.prodPrice" placeholder="Price" name="" id="" required>
            <input type="text" v-model="productI.prodImg" placeholder="Image" name="" id="">
            <button type="submit" class="btn">Add</button>
           </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
    export default {
        data(){
    return{
        productI:{
        prodID: "",   
        prodName: "",
        prodInfo: "",
        prodBrand: "",
        prodPrice: "",
        prodImg: ""
      }
    }
  },
  methods:{
          addData(){
            this.$store.dispatch('addProduct', this.productI)
          }
        }
    }
</script>
<style scoped>

</style>