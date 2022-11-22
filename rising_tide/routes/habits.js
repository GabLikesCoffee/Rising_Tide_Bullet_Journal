const router = require("express").Router();
let Habit = require("../models/habit.model");
const middleware=require("../middleware/authMiddleware");

router.route("/add").post(async (req, res) => {

    //Gets user inputted data

      const tempDate=req.body.habit.completionDate;

      const activity = req.body.habit.activity;

      const isCompleted = req.body.habit.isCompleted;

      const date = new Date(tempDate.year, tempDate.month-1,tempDate.day,12);

      const username=  await middleware.isValidToken(req.body.token);

    try{
      //If no authentification given an error is thrown
      if(username==null){
        res.status(401);
        throw new Error("No user found");
      }

      const newHabit = new Habit({
        username,
        activity,
        isCompleted,
        date,
      });

      //Deletes duplicate habit entry in database
      await Habit.findOneAndDelete({username,activity});

      //Saves habit
      newHabit
        .save()
        .then(() => res.status(201).json("Habit Added"))
        .catch((err) => res.status(400).json("Error: " + err));

    }catch(Error){
        res.json(Error)
    }
});

module.exports = router;
