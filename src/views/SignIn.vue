<template>
  <div class="SignIn">
    <SignInSystem  msg="Login For Enjoy This Website"/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import SignInSystem from '@/components/SignInSystem.vue'


export default {
  name: 'SignIn',
  components: {
    SignInSystem
  }
}
</script>