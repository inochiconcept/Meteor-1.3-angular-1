Data = new Mongo.Collection("Data");

Data.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true
  },
  remove: function () {
    return true;
  }
});
