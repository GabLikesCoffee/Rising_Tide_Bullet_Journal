const router = require("express").Router();
const habit = require("../models/habit.model");
let Habit = require("../models/habit.model");

router.route("/add").post((req, res) => {
  const activity = req.body.activity;
  const isCompleted = req.body.isCompleted;
  const date = Date.now(req.body.date);

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

module.exports = router;
