<template>
  <div class="home">
    <NavBarComp/>
    <router-view/>
    <FooterComp/>
    </div>
</template>

<script>

import NavBarComp from '@/components/NavBarComp.vue';
import FooterComp from '@/components/FooterComp.vue';


export default{
  components:{
    NavBarComp,
    FooterComp
   }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Holtwood+One+SC&display=swap');
#app{
  font-family:'Holtwood One SC', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303841;
}
.home{
  background-color: gainsboro;
}

</style>
