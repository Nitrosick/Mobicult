<template>
  <h1>Мои стикеры</h1>
  <div
    v-if="store.cards.length"
    class="cards"
  >
    <div
      v-for="(card, index) in sortedCards"
      :key="card.id"
    >
      <Card
        v-motion
        :text="card.text"
        :priority="card.priority"
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 150 } }"
      />
    </div>
</div>
  <div
    v-else
    class="empty"
  >
    Здесь пока нет стикеров
  </div>
</template>

<script setup>
import { priorities } from '@/const/priorities';

const store = useStore()

const sortedCards = computed(() => {
  return store.cards.sort((a, b) => {
    const orderA = priorities.find(p => p.value === a.priority).order
    const orderB = priorities.find(p => p.value === b.priority).order
    return orderA - orderB
  })
})
</script>

<style lang="scss" scoped>
.cards {
  padding: var(--unit) 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 20rem));
  gap: var(--unit);
  justify-content: center;
}

.empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 500;
  font-size: var(--font-size-l);
}
</style>
