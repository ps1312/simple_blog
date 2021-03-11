<template>
  <div v-html="compiledMarkdown" class="markdown-body" />
</template>

<script>
import marked from "marked";
import hljs from "highlight.js/lib/core";
import jsHighlight from "highlight.js/lib/languages/javascript";

export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  },
  mounted() {
    hljs.registerLanguage("javascript", jsHighlight)
    hljs.highlightAll()
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown);
    }
  },
}
</script>

<style lang="postcss">
@import "~highlight.js/styles/monokai-sublime.css";

.markdown-body > p > img {
  max-width: 90%;
  max-height: 600px;
  display: flex;
  margin: auto;
}

.markdown-body {
  @apply text-gray-800 text-justify text-lg
}

.markdown-body strong {
  @apply text-indigo-600
}

.markdown-body h1 {
  @apply font-bold text-4xl mt-6
}

.markdown-body h3 {
  @apply font-bold text-2xl mt-6
}

.markdown-body p {
  @apply leading-tight mt-6
}

.markdown-body code {
  @apply mt-8 p-4 rounded-lg shadow-xl text-sm;
}

.markdown-body ul {
  @apply list-disc ml-16 mt-6
}

</style>