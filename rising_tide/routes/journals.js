const router = require("express").Router();
const journal = require("../models/journal.model");
let Journal = require("../models/journal.model");

// router.route("/").get((req, res) => {
//   Journal.find()
//     .then((journals) => res.json(journals))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.route("/add").post((req, res) => {
  const freeReponse = req.body.freeReponse;
  const mood = req.body.moodTracker;
  const date = Date.now(req.body.date);

  const newJournal = new Journal({
    freeReponse,
    mood,
    date,
  });

  newJournal
    .save()
    .then(() => res.json("Journal Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addHabit").post((req, res) => {
  const activity = req.body.activity;
  const isCompleted = req.body.isCompleted;
  const date = Date.parse(req.body.date);

  const newHabit = new Habit({
    activity,
    isCompleted,
    date,
  });

  newHabit
    .save()
    .then(() => res.json("Habit Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:id").get((req, res) => {
//   Journal.findById(req.params.id)
//     .then((journal) => res.json(journal))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/:id").delete((req, res) => {
//   Journal.findByIdAndDelete(req.params.id)
//     .then(() => res.json("journal deleted."))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/update/:id").post((req, res) => {
//   Journal.findById(req.params.id)
//     .then((journal) => {
//       journal.username = req.body.username;
//       journal.description = req.body.description;
//       journal.duration = Number(req.body.duration);
//       journal.date = Date.parse(req.body.date);

//       journal
//         .save()
//         .then(() => res.json("Journal updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
