<template>
  <div id="app" class="antialiase">
    <header>
      <nav-bar></nav-bar>
    </header>
    <main class="container mx-auto px-4 md:px-8 md:max-w-3xl mt-24">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  }
}
</script>