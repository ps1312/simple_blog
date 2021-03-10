<template>
  <li>
    <router-link :to="'/posts/' + post.id">
      <strong class="">{{ post.title }}</strong>

      <div class="">
        <span>Published on {{ formattedDate }}</span>
        <span>{{ post.readTimeEstimate }}</span>
      </div>

      <span class="">{{ post.postContentSynopsys }}</span>
    </router-link>
  </li>
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
