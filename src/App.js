import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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
  // add task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // delete task
  const deleteTask = (id) => {
    console.log("delete task", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // toggle reminder
  const toggleReminder = (id) => {
    console.log("toggle reminder", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container mx-auto">
      <div className="m-4 p-4 border border-green-500 rounded-md">
        <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={!showAddTask} />
        {showAddTask && ( <AddTask onAdd={addTask} />) }
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No tasks"
        )}
      </div>
    </div>
  );
}

export default App;
