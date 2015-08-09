/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

const brands = ['Ford', 'Honda', 'Seat', 'Ferrari', 'Toyota', 'VW', 'Audi'];
const models = ['Corolla', 'Golf', 'A4', 'Fiesta', 'Civic', 'Leon', 'Enzo', 'Diablo', 'Vanquish'];

export default Mirage.Factory.extend({
  model: i => brands[i % brands.length],
  brand: i => models[i % models.length]
});
