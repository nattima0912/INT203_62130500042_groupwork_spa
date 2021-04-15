<template>
<div class="bg-gradient-to-r  from-lavender to-rose h-screen">
 <h1 class="text-4xl text-black  text-center">{{ msg }}</h1>
  <div class="flex justify-center mt-11">
    <p class="text-lg mr-3 ">Username</p>
    <input type="text" class="bg-gray-100 rounded px-10 py-2 mb-4">
  </div>
  <div class="flex justify-center mt-4">
    <p class="text-lg mr-3 ">Password</p>
    <input type="text"  class="bg-gray-100 rounded px-10 py-2 mb-4">
  </div>
  <div class="flex justify-center mb-3">
    <button class="px-9 py-2.5 bg-black rounded-lg text-white mt-3 hover:bg-violet focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Login</button>
  </div>
    <p class=" text-center text-lg ">Or</p>
  <div class="login">
    <p class=" text-center py-3 bg-lemon  w-3/12  text-white ">Login with Line</p>
  </div>
  <div class="login">
    <p class=" text-center py-3 bg-blue-700  w-3/12  text-white ">Login with Facebook</p>
  </div>
  <div class="login">
    <p class=" text-center py-3 bg-white  w-3/12  text-black ">Login with Google</p>
  </div>
  

</div>
</template>

<script>
export default {
  name: 'SignInSystem',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    padding-top: 20pt;
    font-weight: bold; 
}
</style>
