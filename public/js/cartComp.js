Vue.component('cart', {
   data() {
      return {
         showCart: false,
         cartItems: []
      }
   },

   methods: {
      addProduct(product) {
         let find = this.cartItems.find(elem => elem.id_product == product.id_product);
         if (find) {
            this.$parent.putJson(`/api/cart/${product.id_product}/${product.product_name}`, { quantity: 1 })
               .then(data => {
                  if (data) {
                     find.quantity++;
                  } else {
                     console.log('error');
                  }
               })
         } else {
            let item = Object.assign({ quantity: 1 }, product);
            this.$parent.postJson(`api/cart/${product.id_product}/${product.product_name}`, item)
               .then(data => {
                  if (data) {
                     this.cartItems.push(item);
                  } else {
                     console.log('error');
                  }
               })
         }
      }
   }


})