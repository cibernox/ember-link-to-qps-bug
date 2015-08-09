import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['pagination', 'pagination-sm'],
  total: null, // Mandatory
  page: null,  // Mandatory,

  // CPs
  showPagination: computed.gt('total', 1),
  pages: computed('page', 'total', function() {
    const total = parseInt(this.get('total'), 10);
    const page  = parseInt(this.get('page'), 10) || 1;
    const previousPage = (page - 1 > 0) ? page - 1 : null;
    const nextPage = (page + 1 <= total) ? page + 1 : null;
    return [previousPage, page, nextPage].compact();
  }),

  lastPage: computed('page', 'total', function() {
    const total = parseInt(this.get('total'), 10);
    return total;
  })
});
