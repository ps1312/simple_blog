<template>
  <div class="my-10">
    <markdown-display :markdown="require(`../assets/${this.$route.params.id}.md`).default" />
  </div>
</template>

<script>
import MarkdownDisplay from '@/components/MarkdownDisplay';

export default {
  name: "PagePostShow",
  components: {
    MarkdownDisplay
  },
}
</script>
