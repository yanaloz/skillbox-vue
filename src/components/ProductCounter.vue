<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="(amount > 0) ? amount-- : 0">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="amount">

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
        this.$emit('update:count', value);
      }
    }
  }
}
</script>
