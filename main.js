const app = Vue.createApp({
  data() {
    return {
      cart1: 0,
      cart2: 0,
      prodName: 'Socks',
      prodDesc: 'Thing to keep your feet warm',
      prodImg: './assets/images/socks_green.jpg',
      prodURL: 'https://github.com/geordzNZ',
      prodInStock: true,
      prodOOS: false,
      prodInv: 100,
      prodOnSale: false,
      prodDetails: ['50% cotton', '30% wool', '20% polyester'],
      prodVariants: [
        { id: 2234, colour: 'green', imgSrc: './assets/images/socks_green.jpg'},
        { id: 2235, colour: 'blue', imgSrc: './assets/images/socks_blue.jpg'}
      ],
      prodSizes: ['S','M','L','XL']
    }
  },
  methods: {
    // btnAddToCart(){
    //   this.cart2 += 2
    // }
    btnAddToCart() { this.cart2 += 2 },
    updateImg(imgSrc) { this.prodImg = imgSrc },
    btnResetCart() { 
      this.cart1 = 0
      this.cart2 = 0
    }
  }
});
