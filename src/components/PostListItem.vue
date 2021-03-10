<template>
  <li class="p-4 mb-8 rounded-md list-none">
    <router-link class="flex flex-col" :to="'/posts/' + post.id">

      <strong class="text-2xl leading-none text-gray-800">{{ post.title }}</strong>

      <div class="flex justify-between text-sm text-gray-400 my-1">
        <span>Published on {{ formattedDate }}</span>
        <span>{{ post.readTimeEstimate }}</span>
      </div>

      <span class="my-2">{{ post.postContentSynopsys }}</span>

      <span class="my-4 text-indigo-600">Read more...</span>
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
