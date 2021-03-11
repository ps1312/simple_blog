<template>
  <div class="my-10">
    <markdown-display :markdown="markdown" />
  </div>
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
