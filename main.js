const app = Vue.createApp({
  data() {
    return {
      cart1: 0,
      cart2: 0,
      prodName: 'Socks',
      prodBrand: 'Vue Mastery',
      prodDesc: 'Thing to keep your feet warm',
      // prodImg: './assets/images/socks_green.jpg',
      prodSelectedVariant: 0,
      prodURL: 'https://github.com/geordzNZ',
      //prodInStock: true,
      // prodOOS: false,
      //prodInv: 100,
      prodOnSale: false,
      prodDetails: ['50% cotton', '30% wool', '20% polyester'],
      prodVariants: [
        { id: 2234, colour: 'green', imgSrc: './assets/images/socks_green.jpg', qty: 50},
        { id: 2235, colour: 'blue', imgSrc: './assets/images/socks_blue.jpg', qty: 0}
      ],
      prodSizes: ['S','M','L','XL']
    }
  },
  methods: {
    // btnAddToCart(){
    //   this.cart2 += 2
    // }
    btnAddToCart() { this.cart2 += 2 },
    // updateImg(imgSrc) { this.prodImg = imgSrc },
    updateVariant(index) { this.prodSelectedVariant = index },
    btnResetCart() { 
      this.cart1 = 0
      this.cart2 = 0
    }
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
    }
  }
});
