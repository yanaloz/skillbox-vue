<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.image" :alt="product.title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
              {{ product.price  }}
            </span>

    <template>
      <ColorList :colors="product.colors"></ColorList>
    </template>

  </li>
</template>

<script>
import ColorList from './ColorList.vue';

export default {
  components: { ColorList },
  props: ['product', 'colors'],
};
</script>
