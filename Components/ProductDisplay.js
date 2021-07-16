app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html */
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <a :href="prodURL" target="_blank">
          <img :src="prodImg" :alt="prodDesc" :title="prodDesc" :class="{ 'out-of-stock-img': prodOOS }" />
        </a>
      </div>
      <div class="product-info">
        <h1>{{ prodTitle }}</h1>
          <p v-if="prodInv > 10">Lots in Stock</p>
          <p v-else-if="prodInv <=10 && prodInv > 0">Low Stock warning</p>
          <p v-else>Out of Stock - sorry</p>
          <p v-show="prodOnSale">ON SALE</p>
          <p>Shipping {{ shipping }}</p>
          <product-details :details="prodDetails"></product-details>
          <div v-for="(variant, index) in prodVariants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.colour }"></div>
          <ul id="sizes">
            <li v-for="size in prodSizes">{{size}}</li>
          </ul>
          <button @click="btnAddToCart" class="button" :disabled="prodOOS" :class="{ disabledButton: !prodInv }">Add to Cart</button>
          <button @click="btnRemoveFromCart" class="button" :disabled="prodOOS" :class="{ disabledButton: !prodInv }">Reomve from Cart</button>
      </div>
    </div>
    <review-list v-if="prodReviews.length" :reviews="prodReviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
data() {
  return {
    prodName: 'Socks',
    prodBrand: 'Vue Mastery',
    prodDesc: 'Thing to keep your feet warm',
    prodSelectedVariant: 0,
    prodURL: 'https://github.com/geordzNZ',
    prodOnSale: false,
    prodOOS: false,
    prodDetails: ['50% cotton', '30% wool', '20% polyester'],
    prodVariants: [
      { id: 2234, colour: 'green', imgSrc: './assets/images/socks_green.jpg', qty: 50},
      { id: 2235, colour: 'blue', imgSrc: './assets/images/socks_blue.jpg', qty: 0}
    ],
    prodSizes: ['S','M','L','XL'],
    prodReviews: []
  }
},
methods: {
  btnAddToCart() { this.$emit('add-to-cart', this.prodVariants[this.prodSelectedVariant].id) },
  btnRemoveFromCart() { this.$emit('remove-from-cart', this.prodVariants[this.prodSelectedVariant].id) },
  updateVariant(index) { this.prodSelectedVariant = index },
  addReview(review) { this.prodReviews.push(review) }
},
computed: {
  prodTitle() {
    return this.prodOnSale ? this.prodName + ' (from ' +this.prodBrand + ')' + ' IS ON SALE' 
                           : this.prodName + ' (from ' +this.prodBrand + ')'
  },
  prodImg() { 
    return this.prodVariants[this.prodSelectedVariant].imgSrc 
  },
  prodInv() {
    return this.prodVariants[this.prodSelectedVariant].qty
  },
  shipping() {
    return this.premium ? 'FREE' : '£10'
  }
}
})