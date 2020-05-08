import React, { useState } from "react";
import "./App.css";
import { TaskRow } from "./components/TaskRow";

function App() {
  const [userName, setUserName] = useState("fer");
  const [taskItems, setTaskItems] = useState([
    {
      name: "Task one",
      done: false,
    },
    {
      name: "Task two",
      done: false,
    },
    {
      name: "Task three",
      done: true,
    },
    {
      name: "Task four",
      done: false,
    },
  ]);

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const taskTableRows = () =>
    taskItems.map((task) => <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>);
  return (
    <div>
      <h1>Hello world</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
