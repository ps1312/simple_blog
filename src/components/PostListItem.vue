<template>
  <h1>{{ post.title }}</h1>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>
