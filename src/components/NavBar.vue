<template>
  <nav class="w-screen p-4 border-b  border-gray-300 fixed top-0 bg-white">
    <div class="max-w-4xl mx-auto">
      <router-link to="/"><span class="text-4xl font-bold">pssr.dev</span></router-link>

      <router-link class="text-lg font-semibold ml-8" to="/">All posts</router-link>
      <router-link class="text-lg font-semibold ml-8" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>
