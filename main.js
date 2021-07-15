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
      prodOnSale: false
    }
  }
});
