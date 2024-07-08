import React, { useState, useEffect } from "react";
import { FaTasks } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, status: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete));
  };

  const toggleStatus = (taskText) => {
    setTasks(
      tasks.map((task) =>
        task.text === taskText ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className="bg-blue-500 flex justify-center items-center h-screen w-screen overflow-hidden px-3 py-4">
      <div className="bg-white flex flex-col p-4 rounded-lg gap-4 w-full max-w-lg h-full shadow-md">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold text-center w-full">To-Do List</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
          <input
            type="text"
            placeholder="add your task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="px-4 py-1 pb-2 border-2 rounded-md w-full"
          />
          <button
            type="submit"
            onClick={addTask}
            className="bg-blue-500 p-3 rounded-md text-white hover:bg-blue-500"
          >
            <FaPlus />
          </button>
        </form>
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 h-full border-2 rounded-md">
            <FaTasks size="1.5rem" className="text-black/35" />
            <span className="text-sm text-black/50">
              Your Tasks will appear here.
            </span>
          </div>
        ) : (
          <ul className="flex flex-col gap-4 h-full border-2 rounded-lg py-4 pl-4 pr-3 overflow-y-scroll">
            {tasks
              .slice(0)
              .reverse()
              .map((task, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between cursor-pointer border-2 p-2 rounded-md bg-gray-100 gap-4"
                >
                  <div className="flex items-center gap-4 w-full">
                    <input
                      type="checkbox"
                      checked={task.status}
                      onChange={() => toggleStatus(task.text)}
                      className="cursor-pointer accent-blue-500"
                    />
                    <span
                      onClick={() => toggleStatus(task.text)}
                      className={`${
                        task.status && "line-through text-black/50"
                      } w-full`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTask(task.text)}
                    className="text-black/50 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
