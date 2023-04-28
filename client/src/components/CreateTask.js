import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskNameError, setTaskNameError] = useState(false);

  const [taskOwnerName, setTaskOwnerName] = useState("");
  const [taskOwnerNameError, setTaskOwnerNameError] = useState(false);

  const [importance, setImportance] = useState("");
  const [importanceError, setImportanceError] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [startDateError, setStartDateError] = useState(false);

  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

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
      setTaskNameError("Task Name - Required");
    }

    if (!taskOwnerName) {
      setTaskOwnerNameError("Task Owner Name - Required");
    }

    if (!importance) {
      setImportanceError("Importance - Required");
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
    const newtask = {
      task_name: taskName,
      task_owner_name: taskOwnerName,
      importance,
      start_date: startDate,
      notes,
    };

    axios
      .post("http://localhost:3000/api/task", newtask)
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
            feedback={taskNameError ? taskNameError : "Task Name"}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            required
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formTaskOwnerName">
          <Form.Control
            isInvalid={taskOwnerNameError}
            feedback={
              taskOwnerNameError
                ? taskOwnerNameError
                : "Task Owner Name"
            }
            onChange={(e) => setTaskOwnerName(e.target.value)}
            placeholder="Task Owner Name"
            required
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formImportance">
          <Form.Control
            isInvalid={importanceError}
            feedback={importanceError ? importanceError : "Importance"}
            onChange={(e) => {
              setImportance(e.target.value);
            }}
            placeholder="Importance"
            required
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formStartDate">
          <Form.Control
            isInvalid={startDateError}
            feedback={startDateError ? startDateError : "Start Date"}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start Date"
            required
            type="Date"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formNotes">
          <Form.Control
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Button className="col-md-12 text-center" onClick={(e) => handleSubmit(e)} type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}