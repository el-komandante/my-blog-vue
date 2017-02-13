<template>
  <div class="test-post">
    <div class="container">
      <h1>{{ this.title }}</h1>
      <div class="post" v-html="compiledMarkdown">
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import reactMotionPost from 'assets/posts/ReactMotion.md'
import hljs from 'highlight.js'
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  }
})

export default {
  name: 'Post',
  props: ['posts', 'name'],
  data () {
    return {
      markdown: reactMotionPost,
      title: this.posts[this.name].title
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.markdown)
    }
  }
}
</script>

<style scoped>
.test-post {
  background: white;
  /*display: inline-block;*/
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  min-width: 60%;
  min-height: 100vh;
}
.post {
  text-align: left;
}

</style>
