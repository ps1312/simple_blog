<template>
  <div v-html="compiledMarkdown" class="markdown-body" />
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

<style>
@import "~highlight.js/styles/monokai-sublime.css";

.markdown-body > p > img {
  max-width: 90%;
  max-height: 600px;
  display: flex;
  margin: auto;
}

</style>