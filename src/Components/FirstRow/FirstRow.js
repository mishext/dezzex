import React, { useState } from "react";
import "./FirstRow.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Person1 from "../Images/person1.png";
import Person2 from "../Images/person2.png";
import Person3 from "../Images/person3.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const Calendar = [
  { time: "6 AM", Line: <p className="CalendarPChange">FOSH</p> },
  { time: "6 AM", Line: <hr className="hr" /> },
  { time: "6 AM", Line: <p className="CalendarPChange">FOSH</p> },
  { time: "6 AM", Line: <hr className="hr" /> },
  { time: "6 AM", Line: <p className="CalendarPChange">FOSH</p> },
  { time: "6 AM", Line: <hr className="hr" /> },
  { time: "6 AM", Line: <p className="CalendarPChange">FOSH</p> },
  { time: "6 AM", Line: <hr className="hr" /> },
  { time: "6 AM", Line: <p className="CalendarPChange">FOSH</p> },
  { time: "6 AM", Line: <hr className="hr" /> },
  { time: "6 AM", Line: <p className="CalendarPChange">FOSH</p> },
  { time: "6 AM", Line: <hr className="hr" /> },
  { time: "6 AM", Line: <p className="CalendarPChange">FOSH</p> },
  { time: "6 AM", Line: <hr className="hr" /> },
  { time: "6 AM", Line: <p className="CalendarPChange">FOSH</p> },
  { time: "6 AM", Line: <hr className="hr" /> },
];
const Members = [
  { id: 0, Image: Person1 },
  { id: 1, Image: Person2 },
  { id: 1, Image: Person3 },
];
const ListMembers = Members.map((item) => (
  <img className="membersImage" key={item.id} src={item.Image} />
));
const now = 32;
const progressInstance = <ProgressBar now={now} />;

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          className="todoButton"
          variant="outline-success"
          onClick={() => markTodo(index)}
        >
          i
        </Button>
        <Button
          className="todoButton"
          variant="outline-danger"
          onClick={() => removeTodo(index)}
        >
          :
        </Button>
        {/* <span className="options-btn">:</span> */}
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="todoToo">
          <div>
            <b className="todayList">Today To Do List</b>
            <p className="todoCalendar">Saturday</p>
            <p className="todoCalendar">2 October 2019</p>
          </div>
          <Button variant="primary mb-3" type="submit" className="addButton">
            +
          </Button>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
    </Form>
  );
}

function FirstRow() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="FirstRowContainer">
      <div className="containers">
        {/* <h1 className="text-start mb-4">Todo List</h1> */}
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div className="cardsContainer">
        <Card className="firstCard" style={{ width: "16rem" }}>
          <Card.Img
            variant="top"
            src={require("../Images/card1.png")}
            className="cardLogo"
          />
          <Card.Body>
            <p>Team Members</p>
            {ListMembers}
            <p className="cardsProgress">Project Completion</p>
            {progressInstance}
          </Card.Body>
        </Card>

        <Card className="SecondCard" style={{ width: "16rem" }}>
          <Card.Img
            variant="top"
            src={require("../Images/card2.png")}
            className="cardLogo2"
          />
          <Card.Body>
            <p>Team Members</p>
            {ListMembers}
            <p className="cardsProgress">Project Completion</p>
            <ProgressBar variant="custom" now={54} />
          </Card.Body>
        </Card>
      </div>
      {/* <div className="CalendarFixed">
        {Calendar.map((e) => (
          <div className="CalendarsContainer">
            <p className="CalendarP">{e.time}</p>
            <span className="CalendarSpan">{e.Line}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default FirstRow;
