<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="(amount > 1) ? amount-- : 0">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input v-model.number="amount" title="Введите положительное число">

    <button type="button" aria-label="Добавить один товар" @click.prevent="amount++">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>

export default {
  props: [ "count" ],
  computed: {
    amount: {
      get() {
        return this.count;
      },
      set(value) {
        if (typeof value === 'string' || value < 1) {
          value = 1;
        }
        this.$emit('update:count', value);
      }
    }
  }
}
</script>
