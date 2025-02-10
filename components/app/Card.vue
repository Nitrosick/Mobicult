<template>
  <div :class="`card ${priority}`">
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  priority: { type: String, default: 'standard' }
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--unit);
  aspect-ratio: 1/1;
  font-weight: 500;
  box-shadow: 0 5px 15px -10px #00000070;
  text-align: center;
}

.low { background-color: $color-card-low }
.standard { background-color: $color-card-standard }
.high { background-color: $color-card-high }
</style>
