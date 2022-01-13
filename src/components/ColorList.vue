<template>
  <ul class="colors colors--black">
    <template v-for="(color, index) in colors">
      <li class="colors__item" :key="index">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="color" v-model="checkedColor"
                 checked="">
          <span class="colors__value" :style="{ 'background-color': color }">
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
      checkedColor: '#73B6EA',
    };
  },
};
</script>
