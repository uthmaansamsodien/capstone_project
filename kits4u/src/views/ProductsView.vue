<template>
    <div>
        <br/>
        <h1 class="headprod">
        <ins>
            Products:
        </ins>
        </h1>
<br/>
<form class="d-flex justify-content-center" role="search">
    <input class="form-control me-2" type="search" placeholder="Search.." aria-label="Search">
    <button class="btnsearch" type="submit">Search</button>
  </form>
  <br/>
        <CardComp/>
        <SpinnerComp/>
        <br/>
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';

export default {
components: { CardComp }
}
</script>
<style scoped>

.form-control{
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;}
.btnsearch{
    background-color: #303841;
    color: gainsboro;
    border-radius: .8rem;
}

</style>