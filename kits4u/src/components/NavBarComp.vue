<template>
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/"
            ><img
              class="logo"
              src="https://i.postimg.cc/DZhtqh3W/1-removebg-preview-2.png"
              alt="Logo"
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i class="bi bi-list"></i></span>
          </button>
          <div class="head">
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link class="nav-link bi-house" to="/"> HOME</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link bi bi-person" to="/about">
                  ABOUT</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link bi-bag" to="/products">
                  PRODUCTS</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link bi-file-earmark" to="/admin">
                  ADMIN</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link bi-bag-check" to="/checkout">
                  CHECKOUT</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link bi-telephone" to="/contact">
                  CONTACT</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>

<script>
export default {};
</script>

<style scoped>
.logo {
  height: 10rem;
  background-color: gainsboro;
}
.navbar {
  background-color: #303841;
  font-family: 'Belleza', sans-serif;
}
.nav-link{
    background-color: gainsboro;
    color: red;
}

</style>
