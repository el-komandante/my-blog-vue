<template>
  <div id="app">
    <nav>
      <div class="nav-container">
        <router-link v-for="item in nav" class="nav-link" :to="{name: item.name}"><div>{{ item.text }}</div></router-link>
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
  /*align-items: center;*/
  /*justify-content: flex-start;*/
  width: 100vw;
  font-family: 'Open Sans', sans-serif;
}
.nav-container {
  width: 800px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  /*justify-content: center;*/
  align-items: center;
}
.nav-link {
  /*flex-grow: 1;*/
  /*flex-basis: 20%;*/
  text-decoration: none;
  color: #333;
  /*height: 100%;*/
  position: relative;
  font-size: 1.25em;
  /*flex: 1 1 auto;*/
  transition: all ease-out 0.2s;
  margin: 0 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
}
.nav-link:visited {
  color: #333;
}
.nav-link::before, .nav-link::after {
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
  background: white;
  width: calc(100% - 5px);
  z-index: -1;
}
.nav-link:hover, .nav-link:hover::after, .nav-link:hover::before {
  /*color: black;*/
}
.nav-link:hover::before {
  width: calc(100% + 15px);
}
.nav-link:hover::after {
  width: calc(100% + 5px);
}
.nav-link:hover::before {
  opacity: 1;
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
  will-change: transform, filter;
  /*opacity: 0;*/
}
.slide-right-fade-enter-active {
  transition: all 375ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  /*transform: translate3d(0, 0, 0);*/
  /*filter: brightness(0.5);*/
  will-change: filter;
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
.box {
  will-change: transform, opacity;
}
</style>
