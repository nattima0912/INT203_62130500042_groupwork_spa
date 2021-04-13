<template>
 <h1 class="text-4xl  text-sky  text-center ">{{ msg }}</h1>

    
</template>

<script>
export default {
  name: 'SignUpSystem',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin-top: 10pt;
    font-weight: bold; 
}
</style>
