<template>
  <ul class="colors colors--black">
    <template v-for="color in colors">
      <li class="colors__item" :key="color.id">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="color.title">
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
    };
  },
};
</script>
