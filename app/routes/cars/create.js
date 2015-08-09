import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('car');
  },

  actions: {
    save(car) {
      car.save().then(() => this.transitionTo('cars'));
    }
  }
});
