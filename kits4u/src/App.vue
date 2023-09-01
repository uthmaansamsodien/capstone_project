<template>
  <div>
    <NavBarComp/>
    <router-view/>
    </div>
</template>

<script>

import NavBarComp from '@/components/NavBarComp.vue';


export default{
  components:{
    NavBarComp
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
  color: #2c3e50;
}
</style>
