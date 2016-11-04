import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        rating: 1,
        question: this.get('question')
      };

      var self = this;
      Object.keys(params).forEach(function(key) {
        self.set(key, '');
      });

      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
