app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: 
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(rev, ind) in reviews" :key="ind">
        <i>{{ rev.name }} gave this {{ rev.rating }} out of 5 stars and they would 
        <u>{{ rev.recommend === 'No' ? 'not' : rev.recommend === 'Maybe' ? 'possibly' : '' }}</u> recommend this product.</i>
        <br>
        "{{ rev.review }}"
      </li>
    </ul>
  </div>
  `
})