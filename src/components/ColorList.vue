<template>
  <ul class="colors colors--black">
    <template >
      <li class="colors__item" v-for="color in colors" :key="color.id">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="color.code" v-model="checked">
          <span class="colors__value" :style="{ 'background-color': color.code }">
          </span>
        </label>
      </li>
    </template>
  </ul>
</template>

<script>
export default {

  props: ['colors'],
  data() {
    return {
      checked: this.colors[0].code
    }
  },

};
</script>
