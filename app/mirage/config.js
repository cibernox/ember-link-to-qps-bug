const pageSize = 5;

export default function() {
  this.get('/cars', function(db, req) {
    const page = parseInt(req.queryParams.page);
    const offset = (page - 1) * pageSize;
    const cars = db.cars.slice(offset, offset + pageSize);
    return {
      cars,
      meta: { total: db.cars.length }
    };
  });

  this.post('/cars');
}
