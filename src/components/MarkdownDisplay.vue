<template>
  <span>{{ markdown }}</span>
</template>

<script>
export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  }
}
</script>
