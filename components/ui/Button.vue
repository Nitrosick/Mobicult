<template>
  <button
    v-if="!to"
    class="button"
  >
    {{ text }}
  </button>
  <NuxtLink
    v-else
    :to="to"
    class="button"
  >
    {{ text }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  to: { type: String, default: undefined }
})
</script>

<style lang="scss" scoped>
.button {
  background-color: $color-btn-default;
  font-weight: 500;
  padding: calc(var(--unit) / 2) var(--unit);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover,
  &:active {
    background-color: $color-btn-hover;
  }

  &:focus {
    outline: 0.3rem solid #00000015;
  }
}
</style>
