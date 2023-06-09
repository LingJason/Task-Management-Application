import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Table, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NavBar from "./NavBar";
import "../App.css";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("name");
  const [totalTask, setTotalTask] = useState(0);

  const navigate = useNavigate();

  const getTasks = () => {
    axios
      .get("http://localhost:8080/api/task")
      .then((result) => {
        setTasks(result.data);
        setTotalTask(result.data.length);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/task/delete/${id}`, { id })
      .then((result) => {
        //  remove the deleted product from the list
        const updatedTasks = tasks.filter((task) => task.task_id !== id);
        setTasks(updatedTasks);
        setTotalTask(updatedTasks.length);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  // When App initially loads, fetch data and store in state
  useEffect(() => {
    getTasks();
  }, []);

  // If search is empty it shows all products else it will update search
  useEffect(() => {
    if (search === "") {
      getTasks();
    } else {
      axios
        .post("http://localhost:8080/api/task/search", {
          filter,
          search,
        })
        .then((result) => {
          setTasks(result.data);
          setTotalTask(result.data.length);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [filter, search]);

  const tasksTable = tasks.map((task) => (
    <tr key={task.task_id}>
      <td className="text-center">{task.task_id}</td>
      <td className="text-center">{task.task_name}</td>
      <td className="text-center">{task.task_owner_name}</td>
      <td className="text-center">{task.importance}</td>
      <td className="text-center">
        {new Date(task.due_date).toLocaleDateString()}
      </td>
      <td className="text-center">{task.notes}</td>
      <td className="text-center">
        <Button
          variant="warning"
          onClick={() => {
            navigate("/edit", { replace: true, state: { task } });
          }}
        >
          <EditIcon />
        </Button>
        &nbsp;
        <Button variant="warning" onClick={() => handleDelete(task.task_id)}>
          <DeleteIcon />
        </Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="title">Task Management Service</h1>
        <div>Total tasks: {totalTask}</div>
        <InputGroup>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="name">Name</option>
            <option value="importance">Importance</option>
            <option value="task">Task</option>
          </select>
        </InputGroup>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Task Number</th>
              <th className="text-center">Task Name</th>
              <th className="text-center">Task Owner</th>
              <th className="text-center">Importance</th>
              <th className="text-center">Due Date</th>
              <th className="text-center">Notes</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>{tasksTable}</tbody>
        </Table>
        <br />
        <Button
          variant="warning"
          onClick={() => navigate("/create")}
          className="col-md-12 text-center"
        >
          <AddCircleOutlineIcon />
        </Button>
      </Container>
    </div>
  );
}

export default Home;
