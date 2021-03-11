<template>
  <button class="text-left" @click="toggleVisible()">
    <base-icon v-if="!visible" class="w-8 h-8 fill-current text-gray-200" icon="hamburguer" />

    <base-icon v-else class="w-8 h-8 fill-current text-gray-200" icon="close" />

    <div v-if="visible" class="absolute right-0 bg-indigo-500">
      <div class="w-screen bg-indigo-500 mt-4 px-2 py-2">
        <router-link
          to="/"
          class="text-lg block p-2 rounded text-white font-semibold hover:bg-indigo-400"
        >
          All posts
        </router-link>

        <router-link
          to="/about"
          class="text-lg block p-2 rounded text-white font-semibold hover:bg-indigo-400"
        >
          About
        </router-link>

        <a
          download="curriculo_pssr.pdf" href="/curriculo_pssr.pdf"
          class="text-lg block p-2 rounded text-white font-semibold hover:bg-indigo-400"
        >
          Resume
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https:www.github.com/ps1312">
          <base-icon class="w-8 h-8 mx-1 my-2 fill-current text-white rounded hover:bg-indigo-400" icon="github" />
         </a>

         <a target="_blank" rel="noopener noreferrer" href="https:www.github.com/ps1312">
          <base-icon class="w-8 h-8 mx-1 my-2 fill-current text-white rounded hover:bg-indigo-400" icon="linkedin" />
         </a>
      </div>
    </div>

    <div v-if="visible" class="opacity-30 fixed w-screen h-screen top-0 mt-16 left-0 bg-gray-600 -z-10" />

  </button>
</template>

<script>
import BaseIcon from './BaseIcon';
export default {
  components: {
    BaseIcon
  },
  name: "BaseDropdown",
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    }
  }
}
</script>