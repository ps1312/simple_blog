<template>
  <a :href="'/post/' + post.id">
    <h1>{{ post.title }}</h1>
    <span>{{ post.readTimeEstimate }}</span>
    <span>Published on {{ formattedDate }}</span>
    <span>{{ post.postContentSynopsys }}</span>
  </a>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  computed: {
    formattedDate() {
      const options = { day: "2-digit", month: "short", year: "numeric" };
      return this.post.publishedAt.toLocaleDateString("en-US", options);
    }
  }
}
</script>
