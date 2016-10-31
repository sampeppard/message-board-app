import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.question.findAll('question');
  },
});
