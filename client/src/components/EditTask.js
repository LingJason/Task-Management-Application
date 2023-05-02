import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

export default function EditTask() {
  const location = useLocation();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState(
    location.state.task.task_name || ""
  );
  const [taskNameError, setTaskNameError] = useState(false);

  const [taskOwnerName, setTaskOwnerName] = useState(
    location.state.task.task_owner_name || ""
  );
  const [taskOwnerNameError, setTaskOwnerNameError] = useState(false);

  const [importance, setImportance] = useState(
    location.state.task.importance || ""
  );
  const [importanceError, setImportanceError] = useState(false);

  const [startDate, setStartDate] = useState(
    location.state.task.start_date || ""
  );
  const [startDateError, setStartDateError] = useState(false);

  const [notes, setNotes] = useState(false);

  const resetError = () => {
    setTaskNameError(false);
    setTaskOwnerNameError(false);
    setImportanceError(false);
    setStartDateError(false);
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

    if (!startDate) {
      setStartDateError("Start Date - Required");
    }


    if (
      !taskName ||
      !taskOwnerName ||
      !importance ||
      !startDate
    ) {
      return;
    }

    // organizing data in an object
    const updateTask = {
      task_id: location.state.task.task_id,
      task_name: taskName,
      task_owner_name: taskOwnerName,
      importance,
      start_date: startDate,
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
      <Form>
        <Form.Group controlId="formTaskName">
          <Form.Control
            isInvalid={taskNameError}
            feedback={taskNameError ? taskNameError : "task Name"}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="task Name"
            required
            type="text"
            value={taskName}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formTaskOwnerName">
          <Form.Control
            isInvalid={taskOwnerNameError}
            feedback={
              taskOwnerNameError
                ? taskOwnerNameError
                : "task Owner Name"
            }
            onChange={(e) => setTaskOwnerName(e.target.value)}
            placeholder="task Owner Name"
            required
            type="text"
            value={taskOwnerName}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="importance">
          <Form.Control
            isInvalid={importanceError}
            feedback={
              importanceError ? importanceError : "Importance"
            }
            onChange={(e) => setImportance(e.target.value)}
            placeholder="Importance"
            required
            type="text"
            value={importance}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formStartDate">
          <Form.Control
            isInvalid={startDateError}
            feedback={startDateError ? startDateError : "Start Date"}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start Date"
            required
            type="text"
            value={startDate}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formNotes">
          <Form.Control
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
            type="text"
            value={notes}
          ></Form.Control>
        </Form.Group>
        <Button
          className="col-md-12 text-center"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}