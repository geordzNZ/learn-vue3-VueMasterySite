const app = Vue.createApp({
  data() {
    return {
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
        { id: 2234, colour: 'green'},
        { id: 2235, colour: 'blue'}
      ],
      prodSizes: ['S','M','L','XL']
    }
  }
});
