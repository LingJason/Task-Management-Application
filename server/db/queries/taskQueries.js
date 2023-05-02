// db/queries/Task.js

const db = require("../../configs/db.config");

// Create New Task
const addTask = (newTask) => {
  return db
    .query(
      `INSERT INTO task (task_name, task_owner_name, importance, start_date, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [
        newTask.task_name,
        newTask.task_owner_name,
        newTask.importance,
        newTask.start_date,
        newTask.notes,
      ]
    )
    .then((data) => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


// Show all Task
const getAllTasks = () => {
  return db
    .query("SELECT * FROM task ORDER BY task_id;")
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Get Task by owner
const getTaskByOwner = (task_owner_name) => {
  return db
    .query(
      "SELECT * FROM task WHERE task_owner_name ILIKE $1 ORDER BY task_id",
      ["%" + task_owner_name + "%"]
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Get Task by Task Name
const getTaskByTaskName = (task_name) => {
  return db
    .query("SELECT * FROM task WHERE task_name ILIKE $1 ORDER BY task_id", ["%" + task_name + "%"])
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Get Task by Importance
const getTaskByImportance = (importance) => {
  return db
    .query("SELECT * FROM task WHERE importance ILIKE $1 ORDER BY task_id", ["%" + importance + "%"])
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Update Task
const updateTask = (updateTask) => {
  return db
    .query(
      `UPDATE task SET task_name = $1 , task_owner_name = $2 , importance = $3, start_date = $4, notes = $5 WHERE task_id = $6`,
      [
        updateTask.task_name,
        updateTask.task_owner_name,
        updateTask.importance,
        updateTask.start_date,
        updateTask.notes,
        updateTask.task_id,
      ]
    )
    .then((data) => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


// Delete Task
const deleteTask = (task_id) => {
  return db
    .query(`DELETE FROM task WHERE task_id=$1 RETURNING *;`, [task_id])
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  addTask,
  getAllTasks,
  getTaskByOwner,
  getTaskByImportance,
  getTaskByTaskName,
  updateTask,
  deleteTask,
};