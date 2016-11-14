import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    author-rating: Ember.computed('answer.author', 'answer.rating', function() {
      return 'answered by: ' this.get('answer.author') + ' | rating: ' + this.get('answer.rating');
    }),

    delete(answer) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
