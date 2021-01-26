const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VIEWS ROUTES
// TODO: Handlebars will go here.

// API ROUTES

// FIXME: Convert this GET route into a View route.

app.get("/api/trains", (req, res) => {
  db.Train.findAll().then((allTrains) => {
    console.log(allTrains);
    res.json(allTrains);
  });
});

app.get("/api/trains/:id", (res, res) => {
  db.Train.findOne({ where: { id: req.params.id } }).then((foundTrain) => {
    console.log(foundTrain);
    res.json(foundTrain);
  });
});

app.post("/api/trains", (req, res) => {
  // const newTrain = {
  //     name: req.body.trainName,
  //     numCars: 0,
  //     engineColor: "Blue"
  // }

  db.Train.create(req.body).then((result) => {
    console.log(result);
    res.json(result);
  });
});

app.put("/api/trains/:id", (req, res) => {});

app.delete("/api/trains/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
