<template>
  <div id="app">
    <nav>
      <div class="nav-container">
        <transition :name="'nav-fade'">
          <!-- <div v-if="previous[previous.length - 1]" class="left-nav"> -->
            <router-link v-if="previous[previous.length - 1]" class="left-nav" :to="{path: previous[previous.length - 1].path}">
              {{ previous[previous.length - 1].name }}
            </router-link>
          <!-- </div> -->
        </transition>
        <transition :name="'nav-slide-left'">
          <div v-if="posts[$router.currentRoute.path.substr(1)]" class="nav-link">
            {{ posts[$router.currentRoute.path.substr(1)].title }}
          </div>
          <div class="nav-link" v-else>
            Home
          </div>
        </transition>
        <!-- <router-link class="nav-link" :to="{name: 'FrontPage'}">Home</router-link>
        <router-link class="nav-link" :to="{name: 'Post'}">Item 1</router-link>
        <router-link class="nav-link" :to="{name: 'Post'}">Item 2</router-link> -->
      </div>
    </nav>
    <transition :name="transitionName">
      <router-view :posts="posts"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    // console.log(this.$router)
    return {
      transitionName: 'slide-left-fade',
      previous: [],
      nav: {
        frontPage: {
          name: 'FrontPage',
          text: 'Home'
        },
        itemOne: {
          name: 'Post',
          text: 'Item 3'
        },
        itemTwo: {
          name: 'Post',
          text: 'Item 2'
        }
      },
      posts: {
        'react-motion-basics': {
          name: 'react-motion-basics',
          title: 'React Motion Basics',
          text: '## Test Test Test 11111',
          date: new Date()
        },
        'test-post-2': {
          name: 'test-post-2',
          title: 'Test Post 2',
          text: '# Test!!!!! 2222',
          date: new Date()
        },
        'test-post-3': {
          name: 'test-post-3',
          title: 'Test Post 3',
          text: '# Test!!!!! 2222',
          date: new Date()
        },
        'test-post-4': {
          name: 'test-post-4',
          title: 'Test Post 4',
          text: '# Test!!!!! 2222',
          date: new Date()
        },
        'test-post-5': {
          name: 'test-post-5',
          title: 'Test Post 5',
          text: '# Test!!!!! 2222',
          date: new Date()
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.previous.length > 0) {
        if (to.path === this.previous[this.previous.length - 1].path) {
          this.transitionName = 'slide-right-fade'
          this.previous.pop()
        }
      } else {
        console.log(from)
        this.transitionName = 'slide-left-fade'
        const prev = {
          name: from.path.substr(1).length > 0 ? from.path.substr(1) : 'Home',
          path: from.path
        }
        this.previous.push(prev)
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
html, body {
  margin: 0;
  height: 100%;
  width: 100%;
}
body {
  color: #333;
  overflow-x: hidden;
}
#app {
  font-family: 'Open Sans', sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  width: 100%;
  background: white;
}
nav {
  height: 60px;
  background: #303F9F;
  box-shadow: -1px -3px 20px 0px rgba(0,0,0,0.5);
  opacity: 0.8;
  position: fixed;
  z-index: 100;
  display: flex;
  /*align-items: center;*/
  /*justify-content: flex-start;*/
  width: 100vw;
  font-family: 'Open Sans', sans-serif;
}
.nav-container {
  width: 800px;
  margin: 0 auto;
  height: 100%;
  /*display: flex;
  justify-content: center;
  align-items: center;*/
  position: relative;
}
.left-nav {
  margin: auto 0;
  position: absolute;
  top: 50%;
  transform: translate3d(0,-50%,0);
  left: 0;
  transform: translate3d(0,-50%,0);
  text-decoration: none;
  color: white;
  font-size: 1.25em;
  cursor: pointer;
}
.nav-link {
  pointer-events: none;
  text-decoration: none;
  color: white;
  font-size: 1.25em;
  transition: all ease-out 0.2s;
  margin: 0 20px;
  display: inline-block;
  position: absolute;
  margin: auto;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  top: 0;
  bottom: 0;
  /*right: 0;
  top: 0;
  bottom: 0;*/
}
.nav-link:visited {
  color: white;
}
/*.nav-link::before, .nav-link::after {
  content: '';
  position: absolute;
  transition: inherit;
  left: 50%;
  top: 0;
  bottom: 0;
  margin: auto 0;
  transform: translate3d(-50%,0,0);
}
.nav-link::before {
  border: 2.8px solid #333;
  height: 75%;
  width: calc(100% + 5px);
  transform: translate3d(-50%,0,0);
  z-index: -2;
  opacity: 0;
}
.nav-link::after {
  height: calc(100% + 6px);
  background: #303F9F;
  width: calc(100% - 5px);
  z-index: -1;
}
.nav-link:hover, .nav-link:hover::after, .nav-link:hover::before {
  color: black;
}
.nav-link:hover::before {
  width: calc(100% + 15px);
}
.nav-link:hover::after {
  width: calc(100% + 5px);
}
.nav-link:hover::before {
  opacity: 1;
}*/
.container {
  width: 800px;
  margin: 60px auto 0px auto;
  position: relative;
  padding-top: 3%;
}
pre {
  padding: 2%;
  border-radius: 5px;
  border: 1px solid #cccccc;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
}

/*ANIMATIONS*/
.slide-left-fade-enter-active {
  transition: all 375ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-left-fade-leave-active {
  transition: all 375ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-left-fade-enter {
  transform: translate3d(100%, 0, 0);
  /*box-shadow: -4px 2px 29px 2px rgba(0,0,0,0.52);*/
  will-change: transform;
  /*opacity: 0;*/
}
.slide-left-fade-enter-to {
  /*box-shadow: -4px 2px 29px 2px rgba(0,0,0,0.0);*/
}
.slide-left-fade-leave-to {
  transform: translate3d(-40%, 0, 0);
  /*filter: brightness(0.5);*/
  /*will-change: transform, filter;*/
  /*opacity: 0;*/
}
.slide-right-fade-enter-active {
  transition: all 375ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  /*transform: translate3d(0, 0, 0);*/
  /*filter: brightness(0.5);*/
  /*will-change: filter;*/
}
.slide-right-fade-leave-active {
  transform: translate3d(0, 0, 0);
  transition: all 375ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  /*box-shadow: -4px 2px 29px 2px rgba(0,0,0,0.52);*/
}
.slide-right-fade-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-fade-enter-to {
  transform: translate3d(0, 0, 0);
  /*filter: brightness(1);*/
}
.slide-right-fade-leave-to {
  transform: translate3d(100%, 0, 0);
  /*box-shadow: -4px 2px 29px 2px rgba(0,0,0,0.52);*/
}
.nav-slide-left-enter-active, .nav-slide-left-leave-active {
  transition: all 0.3s ease;
}
.nav-slide-left-leave-to {
  /*transform: translate3d(-100%, -50%, 0);*/
  left: 0;
}
.nav-fade-enter-active, .nav-fade-leave-active {
  transition: all 0.3s ease;
}
.nav-fade-leave-to {
  opacity: 0;
}
.box {
  will-change: transform, opacity;
}
</style>
