import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.attr('string'),
  model: DS.attr('string')
});
