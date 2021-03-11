<template>
  <div class="mt-10">
    <post-list :posts="posts" />
  </div>
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
