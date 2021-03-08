<template>
  <div>
    <h1>{{ post.title }}</h1>
    <span>{{ post.readTimeEstimate }}</span>
    <span>Published on Mar 01, 2021</span>
    <span>{{ post.postContentSynopsys }}</span>
  </div>
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
