app.component('review-form', {
  template:
  /*html*/
  `
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
    
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
      <option>Maybe</option>
    </select>

    <label for="review">Review:</label>
    <textarea id="review" cols="30" rows="5" v-model="review"></textarea>
  
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <input class="button" type="submit" value="submit">
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: null
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) { alert('Form fail ... retry!!!')
    return
    }

      let prodReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend
      }
      this.$emit('review-submitted', prodReview)

      this.name = ''
      this.review = ''
      this.rating = null
      this.recommend = null
    }
  }
})