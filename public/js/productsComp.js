Vue.component('products', {
   data() {
      return {
         products: [],
         filtered: [],
      }
   },
   methods: {
      filter(value) {
         let regexp = new RegExp(value, 'i');
         this.filtered = this.products.filter(el => regexp.test(el.product_name));
      }
   },

   mounted() {
      this.$parent.getJson('/api/products')
         .then(data => {
            for (let elem of data) {
               this.products.push(elem);
               this.filtered.push(elem);
            }
         })
   },

   template: `<div class="products">
      <product
      v-for="product of filtered"
      :product="product"
      :img="product.imgProduct"></product>
      </div>`

});

Vue.component('product', {
   props: ['product', 'img'],
   template: `<div class='product-item>
         <img :src='img' :alt='product.product_name'>
         <div class='desc'>
         <h3>{{ product.product_name }}</h3>
         <div><p>{{ product.price }}</p></div>
         <button class='buy-btn' @click="$parent$refs.cart.addProduct(product)">Купить</button>
         </div>
   </div>`
})
