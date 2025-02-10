<template>
  <div :class="`priority ${model}`">
    <span>{{ title }}</span>
    <select
      v-model="model"
      class="select"
    >
      <option
        v-for="option in priorities"
        :key="option.value"
        :value="option.value"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { priorities } from '@/const/priorities';

const model = defineModel({ required: true })
const title = computed(() => priorities.find(p => p.value === model.value).title)
</script>

<style lang="scss" scoped>
.priority {
  position: relative;
  display: inline-block;
  padding: calc(var(--unit) / 3);
  font-weight: 500;
}

.select {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
}

.low { background-color: $color-card-low }
.standard { background-color: $color-card-standard }
.high { background-color: $color-card-high }
</style>
