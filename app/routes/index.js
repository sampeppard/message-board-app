import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Samon Williams",
  content: "Best way to make sweet potato hash?",
  notes: "looking to do this in 30 minutes or less."
}, {
  id: 2,
  author: "Smith Wilson",
  content: "Best gastropub in Seattle?",
  notes: "looking for something on the cheap side!"
}, {
  id: 3,
  author: "Vanessa Garcia",
  content: "How do I fight parking tickets in Philadelphia?",
  notes: "willing to get a lawyer"
}];


export default Ember.Route.extend({
  model() {
    return questions;
  },
});
