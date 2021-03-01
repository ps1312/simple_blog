<template>
  <div id="app">
    <MarkdownDisplay :markdown="markdown" />
  </div>
</template>

<script>
import MarkdownDisplay from "./components/MarkdownDisplay";

export default {
  name: 'App',
  components: {
    MarkdownDisplay,
  },
  data() {
    return {
      markdown: "valid markdown string",
    }
  }
}
</script>
