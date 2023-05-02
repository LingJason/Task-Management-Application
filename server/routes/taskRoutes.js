const express = require("express");
const taskQueries = require("../db/queries/taskQueries");
const router = express.Router();

// CREATE - post
router.post("/", (req, res) => {
  taskQueries
    .addTask(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// READ - get
router.get("/", (req, res) => {
  taskQueries
    .getAllTasks()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// UPDATE search - put
router.post("/search", (req, res) => {
  switch (req.body.filter) {
    case "name":
      taskQueries
        .getTaskByOwner(req.body.search)
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
      break;
    case "importance":
      taskQueries
        .getTaskByImportance(req.body.search)
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
      break;
    case "task":
      taskQueries
        .getTaskByTaskName(req.body.search)
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
      break;
  }
});

// UPDATE - put
router.put("/:id", (req, res) => {
  taskQueries
    .updateTask(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// DELETE - delete
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  taskQueries
    .deleteTask(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
