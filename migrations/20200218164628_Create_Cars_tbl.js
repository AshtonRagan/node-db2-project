//required: vin make model milage
//not req: trans type and title status
exports.up = function(knex) {
  return knex.schema.createTable("Cars", tbl => {
    tbl.increments();
    tbl
      .string("Vin", 200)
      .notNullable()
      .index();
    tbl
      .string("Make", 200)
      .notNullable()
      .index();
    tbl
      .string("Model", 200)
      .notNullable()
      .index();
    tbl.integer("Milage", 200).notNullable();
    tbl.string("Transmission", 200);
    tbl.string("Title", 200);
  });
};

exports.down = function(knex) {
  return knex.schema.droTableIfExists("Cars");
};
