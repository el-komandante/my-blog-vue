<template>
  <div class="front-page">
    <div class="container">
      <div class="posts">
        <div class="post" :data-index="index" :data-key="key" @click="handleClick" v-for="(post, key, index) in posts" :to="post.name">
          <img src="https://avatars2.githubusercontent.com/u/15882674?v=3&s=88" />
          <div class="caption">
            {{ post.title }}
            {{ post.cursorPos.x }}
            <br />
            {{ post.date.getDate() }}/{{ post.date.getDay() }}/{{ post.date.getFullYear() }}
          </div>
          <span :data-key="key" :class="{ pulse: post.clicked, circle: true }" :style="{ left: `${post.cursorPos.x}px`, top: `${post.cursorPos.y}px` }" @animationend="toggleClass"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data () {
    return {
      cursorPos: {
        x: 0,
        y: 0
      },
      activeIndex: null,
      posts: {
        'react-motion-basics': {
          name: 'react-motion-basics',
          title: 'React Motion Basics',
          text: '## Test Test Test 11111',
          date: new Date(),
          cursorPos: {
            x: 0,
            y: 0
          },
          clicked: false
        },
        'test-post-2': {
          name: 'test-post-2',
          title: 'Test Post 2',
          text: '# Test!!!!! 2222',
          date: new Date(),
          cursorPos: {
            x: 0,
            y: 0
          },
          clicked: false
        },
        'test-post-3': {
          name: 'test-post-3',
          title: 'Test Post 3',
          text: '# Test!!!!! 2222',
          date: new Date(),
          cursorPos: {
            x: 0,
            y: 0
          },
          clicked: false
        },
        'test-post-4': {
          name: 'test-post-4',
          title: 'Test Post 4',
          text: '# Test!!!!! 2222',
          date: new Date(),
          cursorPos: {
            x: 0,
            y: 0
          },
          clicked: false
        },
        'test-post-5': {
          name: 'test-post-5',
          title: 'Test Post 5',
          text: '# Test!!!!! 2222',
          date: new Date(),
          cursorPos: {
            x: 0,
            y: 0
          },
          clicked: false
        }
      }
    }
  },
  computed: {
    recentPosts: function () {
      let posts = Object.keys(this.posts).map((key) => {
        let post = this.posts[key]
        post.clicked = null
        post.cursorPos = {
          x: 0,
          y: 0
        }
        return post
      })
      return posts
    }
  },
  methods: {
    handleClick (e) {
      // console.log(e)
      const rect = e.target.getBoundingClientRect()
      const { key } = e.target.dataset
      // console.log(key)
      this.posts[key].cursorPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      this.posts[key].clicked = true
      setTimeout(
        () => {
          this.$router.push({path: key, name: 'Post', params: {name: key}})
        },
        180
      )
    },
    toggleClass (e) {
      const { key } = e.target.dataset
      this.posts[key].clicked = false
      // console.log(e)
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
  /*display: flex;
  flex-wrap: wrap;
  justify-content: center;*/
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
  height: 262.5px;
  min-width: 350px;
  transition: all 0.2s ease;
  /*flex-grow: 1;
  flex-shrink: 1;*/
  flex-basis: 0;
  /*flex-basis: 50%;*/
  /*max-width: 50%;*/
  /*border: 1px solid #333;*/
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.5);
}
.post:hover {
  transform: translate3d(0, -4px, 0);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.4);
}
.post::selection {
  background: none;
}
.circle {
  background: #3F51B5;
  position: absolute;
  opacity: 0;
  /*display: none;*/
  /*transition: all 0.1s ease;*/
  border: 3px solid #354496;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  transform: translateZ(0);
  backface-visibility: hidden;
}
.pulse {
  /*opacity: 1;*/
  animation-name: ripple;
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  /*z-index: 1000;*/
}
.expanding-card {
  animation-name: expand;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
.post > img {
  height: 100%;
  width: 100%;
  pointer-events: none;
}
/*.post:nth-of-type(1) {
  flex-grow: 3;
  height: 400px;
  flex-basis: 400px;
}*/
.caption {
  position: absolute;
  background: black;
  opacity: 0.65;
  color: white;
  left: 0;
  right: 0;
  height: 18%;
  bottom: 0;
  width: 100%;
  padding: 2% 0 4% 2%;
  text-align: left;
  pointer-events: none;
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
@keyframes expand {
  0% {
  }
  100% {
    width: 100vw;
    height: 100vh;
  }
}
@keyframes ripple {
  0% {
    width: 10px;
    height: 10px;
    transform: scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: scale(125);
    opacity: 0;
  }
}
</style>
