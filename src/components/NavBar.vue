<template>
  <nav class="fixed top-0 w-screen p-4 bg-indigo-500">
    <div class="flex items-end justify-between text-gray-800">
      <router-link to="/"><span class="text-3xl font-bold text-gray-100">pssr.dev</span></router-link>

      <base-dropdown />
    </div>
  </nav>
</template>

<script>
import BaseDropdown from './BaseDropdown';

export default {
  components: { BaseDropdown },
  name: "NavBar"
}
// <div class="max-w-4xl mx-auto flex justify-between">
//       <div class="inline-flex  items-end">
//           <router-link to="/"><span class="text-4xl font-bold">pssr.dev</span></router-link>
//           <router-link class="text-lg font-semibold ml-8" to="/">All posts</router-link>
//           <router-link class="text-lg font-semibold ml-8" to="/about">About</router-link>
//       </div>
//       <div class="flex items-center">
//         <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pssr">
//           <img class="w-8 h-8 mr-8" src="../assets/linkedin.svg" />
//         </a>
//         <a target="_blank" rel="noopener noreferrer" href="https:www.github.com/ps1312">
//           <img class="w-8 h-8" src="../assets/github.svg" />
//         </a>
//       </div>
//     </div>
</script>
