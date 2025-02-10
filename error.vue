<template>
  <div class="error">
    <div class="error-code">
      {{ error.statusCode }}
    </div>
    <div class="error-text">
      {{ error.statusMessage }}
    </div>
    <Button
      text="На главную"
      to="/"
    />
  </div>
</template>

<script setup>
const error = useError();
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--unit);

  &-code {
    font-size: 20rem;
    font-weight: 700;
    line-height: 0.8;

    @include bp-s {
      font-size: 35vw;
    }
  }
}
</style>
