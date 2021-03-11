<template>
  <nav class="fixed top-0 w-screen p-4 bg-indigo-500">
    <div class="flex items-end justify-between text-gray-800 lg:hidden">
      <router-link to="/"><span class="text-3xl font-bold text-gray-100">pssr.dev</span></router-link>

      <base-dropdown class="lg:hidden" />
    </div>

    <div class="max-w-4xl mx-auto items-center hidden lg:flex">
      <router-link to="/"><span class="text-3xl font-bold text-gray-100 rounded px-2 hover:bg-indigo-400">pssr.dev</span></router-link>

      <div class="inline-flex flex-grow">
        <div class="inline-flex flex-grow">
            <router-link class="text-lg font-semibold ml-8 text-white font-semibold rounded px-2 hover:bg-indigo-400" to="/">All posts</router-link>
            <router-link class="text-lg font-semibold ml-8 text-white font-semibold rounded px-2 hover:bg-indigo-400" to="/about">About</router-link>
        </div>
        <div class="inline-flex">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pssr">
            <base-icon class="w-6 h-6 fill-current text-white rounded hover:bg-indigo-400" icon="linkedin" />
          </a>
          <a class="ml-4" target="_blank" rel="noopener noreferrer" href="https:www.github.com/ps1312">
            <base-icon class="w-6 h-6 fill-current text-white rounded hover:bg-indigo-400" icon="github" />
          </a>
        </div>
      </div>
      
    </div>
  </nav>
</template>

<script>
import BaseDropdown from './BaseDropdown';
import BaseIcon from './BaseIcon';

export default {
  components: {
    BaseDropdown,
    BaseIcon,
  },
  name: "NavBar"
}
</script>
