Vue.component('filter', {
   data() {
      return {
         filterValue: ""
      }
   },

   template: `<form class='search-form' action='#' @submit.prevent='$parent.$refs.products.filter(filterValue)'>
                  <input type='text' clacc='search-field' v-model='filterValue'>
                  <button class='btn-search' type=''submit>
                  <i class="fas fa-search"></i>
                  </button>
             </form>`
})