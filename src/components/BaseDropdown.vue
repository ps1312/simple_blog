<template>
  <div
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <button>{{ buttonTitle }}</button>
    <div v-if="visible" class="dropdown-content">
      <ul>
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseDropdown",
  data() {
    return {
      visible: false,
    }
  },
  props: {
    buttonTitle: {
      type: String,
      required: true,
    }
  }
}
</script>