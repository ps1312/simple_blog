<template>
  <post-list :posts="posts" />
</template>

<script>
import PostList from "@/components/PostList";
import { posts } from "../data";

export default {
  name: 'Home',
  components: {
    PostList,
  },
  data() {
    return {
      posts,
    }
  }
}
</script>
