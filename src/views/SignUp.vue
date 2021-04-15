<template>
  <div class="SignUp">
    <SignUpSystem  msg="Register"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpSystem from '@/components/SignUpSystem.vue'


export default {
  name: 'SignUp',
  components: {
    SignUpSystem
  }
}
</script>