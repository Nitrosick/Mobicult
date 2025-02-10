<template>
  <tr class="card-edit">
    <td>
      <Priority v-model="priority" />
    </td>
    <td class="input">
      <input
        type="text"
        v-model="text"
        class="text"
      >
    </td>
    <td>
      {{ $dayjs(data.date).format('DD.MM.YYYY') }}
    </td>
    <td class="align-right">
      <button
        class="delete"
        @click.prevent="deleteCard"
      >
        <img
          src="/images/trash.svg"
          alt="delete icon"
          loading="lazy"
        >
      </button>
    </td>
  </tr>
</template>

<script setup>
import { priorities } from '@/const/priorities';

const store = useStore()
const props = defineProps({
  data: { type: Object, required: true }
})

const text = ref(props.data.text ?? null)
const priority = ref(props.data.priority ?? priorities[0])

const updateCard = () => store.updateCard(props.data.id, text.value, priority.value)
const deleteCard = () => store.deleteCard(props.data.id)

watch([text, priority], () => updateCard())
watch(() => props.data, (newVal) => {
  text.value = newVal.text
  priority.value = newVal.priority
}, { deep: true })
</script>

<style lang="scss" scoped>
.card-edit {
  td {
    text-align: left;
    background-color: $color-bg;
    font-size: var(--font-size-s);
    padding: calc(var(--unit) / 2);
    border-bottom: 1px solid var(--color-peach);

    @include bp-xs {
      padding: calc(var(--unit) / 3);
    }
  }

  .align-right {
    text-align: right;
  }

  .input {
    padding: 0;
  }
}

.text {
  background-color: #00000015;
  width: 100%;
  padding: calc(var(--unit) / 2);
  border: none;
}

.delete {
  background-color: transparent;
  border: none;
  font-weight: 900;
  font-size: var(--font-size-l);
  transform: scale(1, 0.8);
  padding: 0;
  cursor: pointer;
}
</style>
