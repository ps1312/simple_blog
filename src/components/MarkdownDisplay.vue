<template>
  <div v-html="compiledMarkdown" class="markdown-body" />
</template>

<script>
import marked from "marked";
import hljs from "highlight.js/lib/core";
import jsHighlight from "highlight.js/lib/languages/javascript";
import mdHighlight from "highlight.js/lib/languages/markdown";
import xmlHighlight from "highlight.js/lib/languages/xml";
import cssHighlight from "highlight.js/lib/languages/css";

export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  },
  mounted() {
    hljs.registerLanguage("javascript", jsHighlight);
    hljs.registerLanguage("markdown", mdHighlight);
    hljs.registerLanguage("xml", xmlHighlight);
    hljs.registerLanguage("css", cssHighlight);
    hljs.highlightAll();
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
  max-height: 500px;
  display: flex;
  margin: auto;
}

.markdown-body {
  @apply text-gray-700 text-lg leading-loose
}

.markdown-body strong {
  @apply text-indigo-600
}

.markdown-body h1 {
  @apply font-bold text-4xl mt-12 text-gray-800
}

.markdown-body h1 > strong {
  @apply font-bold text-4xl mt-8 text-gray-800
}

.markdown-body > h2 {
  @apply text-gray-500
}

.markdown-body h3 {
  @apply font-bold text-2xl mt-6
}

.markdown-body p {
  @apply leading-9 mt-6
}

.markdown-body > p > code {
  @apply bg-gray-200 text-sm px-2 py-1 rounded-sm
}

.markdown-body .hljs {
  @apply text-sm p-8 my-8 rounded-md
}

.markdown-body ul {
  @apply list-disc ml-6 mt-6 sm:ml-16
}

.markdown-body a {
  @apply border-b-2 border-indigo-600 break-words text-indigo-600
}

.markdown-body > ol {
  @apply list-decimal ml-4 mt-4 pr-8 sm:ml-16
}

.markdown-body > ol > li > code {
  @apply bg-gray-200 text-sm px-2 py-1 rounded-sm
}

</style>