<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Корзина
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        {{ products.length | fullProductsQuantity }}
      </span>
      <div v-show="$store.state.cartItemRemoving">
      Удаление товара из корзины...
      </div>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list" v-if="$store.state.cartLoading">Загрузка корзины...
          </ul>
          <ul class="cart__list" v-else-if="$store.state.cartLoadingFailed">Ошибка загрузки
          </ul>
          <ul class="cart__list"  v-else>
            <CartItem v-for="item in products" :key="item.productId" :item="item"/>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{totalPrice | numberFormat }} ₽</span>
          </p>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
  import numberFormat from '@/helpers/numberFormat';
  import fullProductsQuantity from '@/helpers/fullProductsQuantity';
  import { mapGetters } from 'vuex';
  import CartItem from '@/components/CartItem';

  export default {
    filters: { numberFormat, fullProductsQuantity },
    components: { CartItem },
    computed: {
      ...mapGetters({
        products: 'cartDetailProducts',
        totalPrice: 'cartTotalPrice',
      }),
    },
  };

</script>
