<template>
  <header class="header">
    <nav class="menu">
      <Button
        v-for="item in menu"
        :key="item.id"
        :to="item.to"
        :text="item.title"
      />
    </nav>
  </header>
</template>

<script setup>
import { menu } from '@/const/menu'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.menu {
  display: flex;
  gap: calc(var(--unit) / 2);
}
</style>
