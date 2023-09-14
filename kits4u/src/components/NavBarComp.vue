<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img
            class="logo"
            src="https://i.postimg.cc/90xgz3fS/result.png"
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
        <div class="head"></div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link bi-house-door-fill" to="/">
                HOME</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi bi-person-fill" to="/about">
                ABOUT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-bag-fill" to="/products">
                PRODUCTS</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-file-earmark-fill" to="/admin">
                ADMIN</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-cart-fill" to="/checkout">
                CHECKOUT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-telephone-fill" to="/contact">
                CONTACT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-r-circle-fill" to="/register">
                REGISTER</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-door-open-fill" to="/login">
                LOGIN</router-link
              >
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link class="nav-link bi-door-closed-fill" to="/login"
                 @click="logout">LOGOUT</router-link
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
}
.navbar {
  background-color: #303841;
  font-family: "Holtwood One SC", serif;
}
.nav-link {
  color: gainsboro;
}
:hover.nav-link {
  color: #d72323;
  text-decoration: underline;
}
.form-control{
  background-color:gainsboro;
}

.bi-bi-list {
  color: #303841;
}

.navbar-toggler {
  background-color: gainsboro
}
</style>
