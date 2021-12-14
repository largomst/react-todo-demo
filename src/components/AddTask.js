import React from "react";
import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const labelStyle = "block font-semibold mt-4";
  const inputStyle = "w-full border border-black m-2 px-3 py-2";

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a task");
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label className={labelStyle}>Task</label>
        <input
          className={inputStyle}
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label className={labelStyle}>Day & Time</label>
        <input
          className={inputStyle}
          type="text"
          placeholder="Add Day & Time "
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="font-semibold">Set Reminder</label>
        <input
          className="ml-8"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        className="w-full border border-gray-700 bg-gray-700 text-white p-2 mt-4 rounded-md"
        type="submit"
        value="Save Task"
      />
    </form>
  );
}

export default AddTask;
