import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="flex flex-col gap-2 mt-4 mx-8">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
