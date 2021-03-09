<template>
  <span>No posts around here 🧐</span>
</template>

<script>
export default {
  name: "PostList",
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