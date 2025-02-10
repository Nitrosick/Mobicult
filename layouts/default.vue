<template>
  <div class="layout">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const store = useStore()
store.loadFromStorage()
onMounted(() => store.sync())
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  max-width: $xl;
  min-width: $min;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: var(--unit);
}

.main {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
