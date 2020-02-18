exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          Vin: "049e3",
          Make: "ford",
          Model: "mustang",
          Milage: 98,
          Transmission: "stan",
          Title: "clean"
        },
        {
          Vin: "31nb5",
          Make: "dodge",
          Model: "charger",
          Milage: 200,
          Transmission: "auto",
          Title: ""
        }
      ]);
    });
};
