<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.image" :alt="product.title">
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
              {{ product.price | numberFormat  }}
            </span>

    <template>
      <ColorList :colors="product.colors"></ColorList>
    </template>

  </li>
</template>

<script>
import ColorList from '@/components/ColorList.vue';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  components: { ColorList },
  filters: {
    numberFormat,
  },
  methods: {
    gotoPage,
  },
  props: ['product', 'colors'],
};
</script>
