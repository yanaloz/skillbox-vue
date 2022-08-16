<template>
  <router-link class="header__cart" aria-label="Корзина с товарами" :to="{name: 'cart'}">

    <svg width="30" height="21" fill="currentColor">
      <use xlink:href="#icon-cart"></use>
    </svg>

    <!--<i class="header__count&#45;&#45;spinner icon icon-spinner animate-spin"></i>-->
    <span class="header__count"
          aria-label="Количество товаров">{{ $store.state.cartProducts.length }}</span>

  </router-link>
</template>

<script>
export default {

};
</script>
