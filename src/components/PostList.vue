<template>
  <div>
    <span v-if="posts.length === 0">No posts around here 🧐</span>
    <post-list-item v-else v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostListItem from "@/components/PostListItem";
export default {
  name: "PostList",
  components: {
    PostListItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>