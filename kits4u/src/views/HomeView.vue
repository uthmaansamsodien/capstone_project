<template>
  <div class="bgImg">
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
          <img
            src="https://i.postimg.cc/DZhtqh3W/1-removebg-preview-2.png"
            alt="logo"
          />
        </div>
        <div class="col name">WELCOME TO KITS 4 U</div>
        <div><button class="btn btn-home" href="./ProductsView.vue">See products:</button>
          <button class="btn btn-home" href="./ContactView.vue">Contact us:</button>
        </div>
      </div>
    </div>
    <!-- <div class="homepic">
      <img src="https://i.postimg.cc/SKg2Yb5L/sports-cup-crowd-fans-silhouette-vector-35552718-removebg-preview.png" id="homepic" alt="logo">
    </div> -->
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style scope>
.name {
  color: #d72323;
  font-size: 8rem;
}
.btn-home{ 
  background-color:#303841 !important;
  color:gainsboro !important;
  margin: 2rem !important;
}
:hover.btn-home{
  color: #d72323 !important ;
}
.homepic{
  width: 100%;
}


</style> 
