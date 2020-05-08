import React, { useState } from "react";
import "./App.css";
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [userName, setUserName] = useState("Fer");
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
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator />
      <table className="table table-striped table-bordered">
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
