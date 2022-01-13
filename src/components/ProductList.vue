<template>
  <ul class="catalog__list">
    <template v-for="(product) in products">
      <ProductItem :product="product" :key="product.title">
      </ProductItem>
    </template>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>
