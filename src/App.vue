<template>
  <div id="app">
    <MarkdownDisplay :markdown="markdown" />
  </div>
</template>

<script>
import MarkdownDisplay from "./components/MarkdownDisplay";
import markdown from "./data";

export default {
  name: 'App',
  components: {
    MarkdownDisplay,
  },
  data() {
    return {
      markdown,
    }
  }
}
</script>
