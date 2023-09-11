<template>
  <div class="bgImg">
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
          <img class="homeImg"
            src="https://i.postimg.cc/90xgz3fS/result.png"
            alt="logo"
            />
          </div>
          <div class="col name">WELCOME TO KITS 4  U</div>
          <div>
            <br>
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button type="butt3  B on" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://i.postimg.cc/QMxmgzjp/TELEMMGLPICT000316465668-trans-Nv-BQz-QNjv4-Bq-Gnv-E-VNXSbhg1qq-FSd7e-P5goj-ZYl-P8f0i9h2t-Pq-CNs-M.jpg" class="d-block w-100" alt="logo">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/c1TzVfb1/gettyimages-1442809582.jpg" class="d-block w-100" alt="logo">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/tT3K1fkF/methode-sundaytimes-prod-web-bin-a305e594-6777-11ed-9960-a1f4eb634c35.jpg" class="d-block w-100" alt="logo">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/jdQLPX7P/Portugal-Portraits-FIFA-World-Cup-Qatar-2022.jpg" class="d-block w-100" alt="logo">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
            <div>
              <br/>
             <div>
              <h1 class="subhead bi bi-arrow-up-square-fill" >
                VIEW OUR INTERNATIONAL COLLECTION <span class="bi bi-arrow-up-square-fill"></span>
              </h1></div>
            </div>
         
            <br/>

            <div>
              <a class="btn-home" href="/products">See products:</a>
              <a class="btn-home" href="/contact">Contact us:</a>
            </div>
           <br>
        </div>
      </div>
      <!-- <div class="bgImg">
        <img src="https://i.postimg.cc/2ySp67CH/CELEBS-IN-FOOTBALL-SHIRTS.webp" alt="logo">
      </div> -->
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
  padding: 5px;
  border-radius: 7%;
  text-decoration: none;
}
:hover.btn-home{
  color: #d72323 !important ;
  text-decoration: underline;

}

.bgImg{
  background-image: url(https://i.postimg.cc/2ySp67CH/CELEBS-IN-FOOTBALL-SHIRTS.webp);
  background-attachment: scroll;
  background-size:  contain;
  opacity: 90%;
}
.homeImg{
  width: 30rem;
}
:hover.homeImg{
  
  transition: transform .3s;
/*transition:  .3s;*/
  transform: scale(1.1);
}
.subhead{
  color: #d72323;
  background-color: gainsboro;
  opacity: 85%;
}

</style> 
