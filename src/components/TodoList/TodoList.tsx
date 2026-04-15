import "../../App.css";
import { useState } from "react";

export default function TodoList() {
  type todo = {
    id: string;
    task: string;
  };

  const [task, setTask] = useState("");
  const [list, setList] = useState<todo[]>([]);

  const AddTask = () => {
    if (task.trim() !== "") {
      setList((prev) => [...prev, { id: crypto.randomUUID(), task }]);
      setTask("");
    }
  };

  const DeleteTask = (id: string) => {
    setList(list.filter((i) => i.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button className="button" onClick={AddTask}>
        Add Task
      </button>
      <ul className="lst">
        {list.map((item, index) => (
          <li key={index}>
            {item.task}
            <button onClick={() => DeleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
