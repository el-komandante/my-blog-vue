<template>
  <div class="test-post">
    <h1><router-link :to="{name: 'Hello'}">TEST</router-link></h1>
  </div>
</template>

<style scoped>
.test-post {
  background: black;
  /*display: inline-block;*/
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  min-width: 60%;
  min-height: 100vh;
}
</style>
