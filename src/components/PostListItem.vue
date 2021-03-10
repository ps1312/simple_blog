<template>
  <li>
    <router-link :to="'/posts/' + post.id">
      <strong class="post-title">{{ post.title }}</strong>

      <div class="post-subtitle">
        <span>Published on {{ formattedDate }}</span>
        <span>{{ post.readTimeEstimate }}</span>
      </div>

      <span class="post-content-synopsys">{{ post.postContentSynopsys }}</span>
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

<style scoped>
li {
  padding: 16px;
  list-style-type: none;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--main-bg-color);
  border-radius: 8px;
  text-align: justify;
}
a {
  color: var(--main-font-color);
  text-decoration: none;
}
.post-title {
  font-size: var(--title-font-size);
}
.post-subtitle {
  display: flex;
  justify-content: space-between;
  font-size: var(--subtitle-font-size);
  color: var(--light-font-color);
  margin: 8px 0  16px 0;
}
.post-content-synopsys {
  font-size: var(--body-font-size);
}
</style>