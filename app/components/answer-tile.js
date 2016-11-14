import Ember from 'ember';

export default Ember.Component.extend({

  details: Ember.computed('answer.author', 'answer.rating', function() {
    return this.get('answer.author') + ' rating: ' + this.get('answer.rating');
  }),

  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});

// import Ember from 'ember';
//
// export default Ember.Component.extend({
//
//   heading: Ember.computed('review.author', 'review.rating', function() {
//     return this.get('review.author') + ' - ' + this.get('review.rating');
//   }),
//
//   actions: {
//     delete(review) {
//       if (confirm('Are you sure you want to delete this review?')) {
//         this.sendAction('destroyReview', review);
//       }
//     }
//   }
// });
