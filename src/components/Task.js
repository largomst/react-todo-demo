import { FaTimes } from "react-icons/fa";
function Task({ task, onDelete }) {
  return (
    <div className="bg-gray-200  py-2 px-4">
      <h3 className="text-xl relative">
        {task.text}{" "}
        <FaTimes
          className="inline absolute right-4 text-red-500 cursor-pointer"
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p className="text-sm">{task.day}</p>
    </div>
  );
}

export default Task;
