import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskNameError, setTaskNameError] = useState(false);

  const [taskOwnerName, setTaskOwnerName] = useState("");
  const [taskOwnerNameError, setTaskOwnerNameError] = useState(false);

  const [importance, setImportance] = useState("");
  const [importanceError, setImportanceError] = useState(false);

  const [dueDate, setDueDate] = useState("");
  const [dueDateError, setDueDateError] = useState(false);

  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

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
      setTaskNameError("Task Name - Required");
    }

    if (!taskOwnerName) {
      setTaskOwnerNameError("Task Owner Name - Required");
    }

    if (!importance) {
      setImportanceError("Importance - Required");
    }

    if (!dueDate) {
      setDueDateError("Due Date - Required");
    }


    if (
      !taskName ||
      !taskOwnerName ||
      !importance ||
      !dueDate
    ) {
      return;
    }

    // organizing data in an object
    const newtask = {
      task_name: taskName,
      task_owner_name: taskOwnerName,
      importance,
      due_date: dueDate,
      notes
    };

    axios
      .post("http://localhost:8080/api/task", newtask)
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
      <h1 className="title">Create New Task</h1>
      <Form className="mx-3" >
        <Form.Group className="mb-3" controlId="formTaskName">
          <Form.Control
            isInvalid={taskNameError}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            required
            type="text"
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {taskNameError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTaskOwnerName">
          <Form.Control
            isInvalid={taskOwnerNameError}
            onChange={(e) => setTaskOwnerName(e.target.value)}
            placeholder="Task Owner Name"
            required
            type="text"
          ></Form.Control>
            <Form.Control.Feedback type="invalid">
            {taskOwnerNameError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImportance">
          <Form.Select
            isInvalid={importanceError}
            onChange={(e) => {
              setImportance(e.target.value);
            }}
            placeholder="Importance"
            required
            type="text"
          >
            <option value={""} disabled selected >Importance</option>
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
            type="Date"
          ></Form.Control>
            <Form.Control.Feedback type="invalid">
            {dueDateError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formNotes">
          <Form.Control
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Button variant="warning" className="col-md-12 text-center" onClick={(e) => handleSubmit(e)} type="submit">
          <SaveAltIcon/>
        </Button>
      </Form>
    </div>
  );
}