<template>
  <markdown-display :markdown="markdown" />
</template>

<script>
import MarkdownDisplay from '@/components/MarkdownDisplay';
import { markdown } from "@/data";

export default {
  name: "PagePostShow",
  components: {
    MarkdownDisplay
  },
  data() {
    return {
      markdown
    }
  },
}
</script>

<style>

</style>