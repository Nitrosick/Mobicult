<template>
  <h1>Настройки</h1>
  <div class="settings">
    <table class="settings-table">
      <thead>
        <tr>
          <th>Приоритет</th>
          <th>Текст</th>
          <th>Дата</th>
          <th></th>
        </tr>
      </thead>
      <TransitionGroup
        name="cards"
        tag="tbody"
      >
        <CardEdit
          v-for="card in store.cards"
          :key="card.id"
          :data="card"
        />
      </TransitionGroup>
    </table>
    <div class="control">
      <Button
        text="Новый стикер"
        @click="addCard"
      />
    </div>
  </div>
</template>

<script setup>
const store = useStore()

const addCard = () => store.addCard()
</script>

<style lang="scss" scoped>
.settings {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: var(--unit);
  padding: var(--unit) 0;

  &-table {
    border-collapse: collapse;

    th {
      text-align: left;
      background-color: $color-bg;
      padding: calc(var(--unit) / 2);
      font-weight: 500;
      border-top: 1px solid var(--color-peach);
      border-bottom: 2px solid var(--color-peach);

      @include bp-xs {
        padding: calc(var(--unit) / 3);
      }
    }
  }
}

.control {
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
}

.cards-enter-active, .cards-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.cards-enter-from {
  opacity: 0;
  transform: translateX(calc(var(--unit) * -1));
}

.cards-leave-to {
  opacity: 0;
  transform: translateX(var(--unit));
}
</style>
