import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "foo",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "bar",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  const deleteTask = (id) => {
    console.log("delete task", id);
  };
  return (
    <div className="container mx-auto pt-4">
      <Header title="Task Tracker" color="bg-gray-800" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
