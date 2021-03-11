<template>
  <li class="p-4 mb-8 rounded-md list-none">
    <div class="flex flex-col">

      <strong class="text-2xl leading-none text-gray-800">{{ post.title }}</strong>

      <div class="flex justify-between text-sm text-gray-400 my-1">
        <span>Published on {{ formattedDate }}</span>
        <span>{{ post.readTimeEstimate }}</span>
      </div>

      <span class="my-2">{{ post.postContentSynopsys }}</span>

      <router-link :to="'/posts/' + post.id" class="my-4 text-indigo-600">Read more...</router-link>
    </div>
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
