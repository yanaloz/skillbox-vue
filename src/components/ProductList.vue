 <template>
  <ul class="catalog__list">
    <template v-for="product in products">
      <ProductItem :product="product" :key="product.id">
      </ProductItem>
    </template>
  </ul>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>
