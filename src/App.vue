<template>
  <div id="app">
    <nav>
      <router-link class="nav-link" :to="{name: 'FrontPage'}">hello</router-link>
      <router-link class="nav-link" :to="{name: 'Post'}">test-post</router-link>
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
    return {
      transitionName: 'slide-left-fade',
      previous: [],
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
      if (to.name === this.previous[this.previous.length - 1]) {
        this.transitionName = 'slide-right-fade'
        this.previous.pop()
      } else {
        this.transitionName = 'slide-left-fade'
        this.previous.push(from.name)
      }
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  width: 100%;
}
body {
  color: #333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  width: 100%;
  background: white;
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
}

/*ANIMATIONS*/
.slide-left-fade-enter-active {
  transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-left-fade-leave-active {
  transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-left-fade-enter {
  transform: translate3d(100%, 0, 0);
  /*box-shadow: -4px 2px 29px 2px rgba(0,0,0,0.52);*/
  /*opacity: 0;*/
}
.slide-left-fade-leave-to {
  transform: translate3d(-40%, 0, 0);
  /*filter: brightness(0.5);*/
  /*opacity: 0;*/
}
.slide-right-fade-enter-active {
  transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  /*filter: brightness(0.5);*/
}
.slide-right-fade-leave-active {
  transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-right-fade-enter {
  transform: translate3d(-100%, 0, 0);
  /*filter: brightness(1);*/
}
.slide-right-fade-leave-to {
  transform: translate3d(40%, 0, 0);
}
</style>
