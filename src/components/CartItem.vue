<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="item.product.image" width="120" height="120"
           alt="item.product.title">
    </div>
    <h3 class="product__title">
      {{ item.product.title }}
    </h3>
    <span class="product__code">
                Артикул: {{ item.product.id  }}
              </span>

      <ProductCounter :count.sync="amount" class="product__counter"/>

    <b class="product__price">
      {{ item.amount * item.product.price | numberFormat }} ₽
    </b>

    <button class="product__del button-del" type="button" @click.prevent="deleteProduct(item.productId)"
            aria-label="Удалить товар из корзины">
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
  import numberFormat from '@/helpers/numberFormat';
  import ProductCounter from '@/components/ProductCounter';
  import { mapMutations } from 'vuex';

  export default {
    components: { ProductCounter },
    filters: {numberFormat},
    props: ['item'],
    computed: {
      amount: {
        get() {
          return this.item.amount;
        },
        set(value) {
          this.$store.commit('updateCartProductAmount', {productId: this.item.productId, amount: value});
        }
      }
    },
    methods: {
      ...mapMutations({deleteProduct: 'deleteCartProduct'})
    }
  }
</script>
