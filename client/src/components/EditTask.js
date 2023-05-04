import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import NavBar from "./NavBar";
import axios from "axios";

export default function EditTask() {
  const location = useLocation();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState(location.state.task.task_name || "");
  const [taskNameError, setTaskNameError] = useState(false);

  const [taskOwnerName, setTaskOwnerName] = useState(
    location.state.task.task_owner_name || ""
  );
  const [taskOwnerNameError, setTaskOwnerNameError] = useState(false);

  const [importance, setImportance] = useState(
    location.state.task.importance || ""
  );
  const [importanceError, setImportanceError] = useState(false);

  const [dueDate, setDueDate] = useState(location.state.task.due_date || "");
  const [dueDateError, setDueDateError] = useState(false);

  const [notes, setNotes] = useState(null);

  const resetError = () => {
    setTaskNameError(false);
    setTaskOwnerNameError(false);
    setImportanceError(false);
    setDueDateError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetError();

    if (!taskName) {
      setTaskNameError("task Name - Required");
    }

    if (!taskOwnerName) {
      setTaskOwnerNameError("task Owner Name - Required");
    }

    if (!importance) {
      setImportance("Importance - Required");
    }

    if (!dueDate) {
      setDueDateError("Due Date - Required");
    }

    if (!taskName || !taskOwnerName || !importance || !dueDate) {
      return;
    }

    // organizing data in an object
    const updateTask = {
      task_id: location.state.task.task_id,
      task_name: taskName,
      task_owner_name: taskOwnerName,
      importance,
      due_date: dueDate,
      notes,
    };

    axios
      .put(
        `http://localhost:8080/api/task/${location.state.task.task_id}`,
        updateTask
      )
      .then((result) => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <NavBar />
      <h1 className="title">Update Task</h1>
      <Form className="mx-3">
        <Form.Group className="mb-3" controlId="formTaskName">
          <Form.Control
            isInvalid={taskNameError}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="task Name"
            required
            type="text"
            value={taskName}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {taskNameError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTaskOwnerName">
          <Form.Control
            isInvalid={taskOwnerNameError}
            onChange={(e) => setTaskOwnerName(e.target.value)}
            placeholder="task Owner Name"
            required
            type="text"
            value={taskOwnerName}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {taskOwnerNameError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="importance">
          <Form.Select
            isInvalid={importanceError}
            onChange={(e) => setImportance(e.target.value)}
            placeholder="Importance"
            required
            type="text"
            value={importance}
          >
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {importanceError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDueDate">
          <Form.Control
            isInvalid={dueDateError}
            onChange={(e) => setDueDate(e.target.value)}
            placeholder="Due Date"
            required
            type="date"
            value={dueDate}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {dueDateError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNotes">
          <Form.Control
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
            type="text"
            value={notes}
          ></Form.Control>
        </Form.Group>
        <Button
          variant="warning"
          className="col-md-12 text-center"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          <SaveAltIcon />
        </Button>
      </Form>
    </div>
  );
}
