<template>
  <div class="front-page">
    <div class="container">
      <div class="posts">
        <router-link class="post" v-for="post in posts" :to="post.name">
          <img src="https://avatars2.githubusercontent.com/u/15882674?v=3&s=88" />
          <div class="caption">
            {{ post.title }}
            <br />
            {{ post.date.getDate() }}/{{ post.date.getDay() }}/{{ post.date.getFullYear() }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  props: ['posts'],
  data () {
    return {
      cursorPos: {
        x: 0,
        y: 0
      }
    }
  },
  handleClick (e) {
    const rect = e.target.getBoundingClientRect()
    this.cursorPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.front-page {
  /*display: inline-block;*/
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  background: white;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.posts {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.post {
  position: relative;
  background: white;
  /*padding: 4px;*/
  margin: 10px;
  color: white;
  height: 200px;
  min-width: 200px;
  transition: all 0.2s ease;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  /*flex-basis: 50%;*/
  /*max-width: 50%;*/
  /*border: 1px solid #333;*/
  overflow: hidden;
}
.post:hover {
  transform: translate3d(0, -4px, 0);
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.4);
}
/*.ripple {
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  z-index: 1000;
}
.ripple::after {
  content: "";
  background: #cccccc;
  display: block;
  position: absolute;
  top: inherit;
  left: inherit;
  height: 100%;
  width: 100%;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  border-radius: 50%;
  opacity: 0;
  transition: all 1s;
}
.ripple:active::after {
  top: inherit;
  left: inherit;
  padding: 0;
  margin: 0;
  opacity: 0.7;
  transition: 0s
}*/
.post > img {
  height: 100%;
  width: 100%;
}
.post:nth-of-type(1) {
  flex-grow: 3;
  height: 400px;
  flex-basis: 400px;
}
.caption {
  position: absolute;
  background: rgba(0,0,0,0.5);
  color: white;
  left: 0;
  right: 0;
  height: 18%;
  bottom: 0;
  width: 98%;
  padding: 2% 0 4% 2%;
  text-align: left;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
