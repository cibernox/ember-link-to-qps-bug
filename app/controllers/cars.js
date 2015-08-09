import Ember from 'ember';

const { computed } = Ember;
const pageSize = 5;

export default Ember.Controller.extend({
  queryParams: ['page'],
  page: 1,
  numberOfPages: computed('total', function() {
    return this.get('total') / pageSize;
  }),
});
