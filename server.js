const express = require("express");
const db = require("./Data/dbConfig");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  db("Cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      console.log(err);
    });
});

server.get("/:id", (req, res) => {
  db("Cars")
    .where({ id: req.params.id })
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "Could not find car with that id" });
    });
});

server.post("/", (req, res) => {
  db("Cars")
    .insert(req.body)
    .then(count => {
      return res.status(200).json(count);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "You need: vin,make,model,milage" });
    });
});
module.exports = server;
