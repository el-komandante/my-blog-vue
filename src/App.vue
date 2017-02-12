<template>
  <div id="app">
    <nav>
      <router-link class="nav-link" :to="{name: 'Hello'}">hello</router-link>
      <router-link class="nav-link" :to="{name: 'test-post'}">test-post</router-link>
    </nav>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left-fade',
      previous: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.previous = this.previous.concat([from.path])
    alert('come onnnnnn')
    console.log(this.previous)
    if (to.path === this.previous[this.previous.length - 1]) {
      this.transitionName = 'slide-right-fade'
    } else {
      this.transitionName = 'slide-left-fade'
    }
    next(false)
  }
  // beforeRouteUpdate (to, from, next) {
  //   alert('argh')
  //   next()
  // }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#app > div {
  margin-top: 60px;
}
nav {
  height: 60px;
  background: white;
  box-shadow: -1px -3px 20px 0px rgba(0,0,0,0.5);
  opacity: 0.8;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  /*justify-content: flex-start;*/
  width: 100vw;
}
.nav-link {
  flex-grow: 1;
  flex-basis: 0;
  text-decoration: none;

}
.slide-left-fade-enter-active {
  transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-left-fade-leave-active {
  transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-left-fade-enter {
  transform: translateX(100%);
  /*opacity: 0;*/
}
.slide-left-fade-leave-to {
  transform: translateX(-40%);
  /*opacity: 0;*/
}
.slide-right-fade-enter-active {
  transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-right-fade-leave-active {
  transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-right-fade-enter {
  transform: translateX(-100%);
}
.slide-right-fade-leave-to {
  transform: translateX(40%);
}
</style>
