<template>
  <div class="flex cursor-pointer">
    <div class="flex px-8 py-4">
      <img class="h-8 w-8" src=".\assets\v-live.png" />
      <p class="text-2xl font-black pl-2">VLIVE</p>
    </div>
    <div class="text-base px-5 py-5 hover:underline">
      <router-link to="/">Home</router-link>
    </div>
    <div class="text-base px-5 pt-5 hover:underline">
      <router-link to="/SignUp">Sign Up</router-link>
    </div>

    <div class="w-3/6 ml-80 flex items-center justify-end">
      <div class="text-base pl-4 pr-4 py-2 hover:underline">
        <router-link to="/SignIn">Sign In</router-link>
      </div>
      <div class="relative pl-3 text-base">
        <select class="cursor-pointer transform hover:scale-110">
          <option>English</option>
          <option>한국어</option>
          <option>ภาษาไทย</option>
        </select>
      </div>
    </div>
  </div>

  <router-view />
</template>

<style>
</style>
