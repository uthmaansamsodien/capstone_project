<template>
    <div>
<br/>
        <div class="container text-center">
            <div>
              <h2 class="headprod"><ins>CONTACT US</ins></h2>
              <p class="contact-head">LET'S CONNECT!</p>
            </div>
          <div class="row align-items-center">
            <div class="col left">
              <div class="home">
                <form
                  class="p-5"
                  action="https://formspree.io/f/xqkonyvj"
                  method="POST"
                >
                  <div>
                    <label for="exampleFormControlInput1" class="form-label"
                      >First Name:</label
                    >
                    <input
                      name="firstname"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="(required)"
                      required
                      oninvalid="this.setCustomValidity('Please fill in the missing information')"
                      oninput="this.setCustomValidity('')"
                    />
                  </div>
                  <div>
                    <label for="exampleFormControlInput1" class="form-label"
                      >Surname:</label
                    >
                    <input
                      name="surname"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1" 
                      placeholder="(required)"
                      required
                      oninvalid="this.setCustomValidity('Please fill in the missing information')"
                      oninput="this.setCustomValidity('')"
                    />
                  </div>
                  <div>
                    <label for="exampleFormControlInput1" class="form-label"
                      >Email Address:</label
                    >
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="(required)"
                      r
                      required
                      oninvalid="this.setCustomValidity('Please fill in the missing information')"
                      oninput="this.setCustomValidity('')"
                    />
                  </div>
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >Comment or Message:</label
                  >
                  <textarea
                    name="message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Type a message here..."
                    rows="4"
                  ></textarea>
                  <br />
                  <div class="middle d-flex justify-content-center">
                    <button type="submit" class="btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col">
              <img class="conpic"
                src="https://i.postimg.cc/DZhtqh3W/1-removebg-preview-2.png "
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
</template>

<script>
</script>

<style scoped>
.btn{
    background-color: #303841;
    color: gainsboro;
    border-radius: .8rem;
}
:hover.conpic{
    transition: transform .3s;
    transform: scale(1.1);
}
</style>