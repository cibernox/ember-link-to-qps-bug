import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true }
  },

  model(params) {
    return this.store.findQuery('car', { page: params.page });
  },

  setupController(controller) {
    this._super(...arguments);
    controller.setProperties(this.store.metadataFor('car'));
  }
});
