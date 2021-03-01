<template>
  <div v-html="compiledMarkdown" />
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";

export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  },
  mounted() {
    hljs.highlightAll()
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown, {
        highlight: function(markdown) {
          return hljs.highlightAuto(markdown).value
        }
      })
    }
  }
}
</script>

<style scoped>
@import "~highlight.js/styles/monokai-sublime.css";
</style>