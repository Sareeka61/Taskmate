import { useState } from "react";
import { TaskCard } from "./TaskCard"

export const TaskList = (props) => {
     const [tasks, setTasks] = useState([
    {id: 1337, name: "Do react projects", completed: true}, 
    {id: 1338, name: "Contemplate what's wrong with my life", completed: true}, 
    {id: 1339, name: "Fold clothes of your bed and don't throw on chair & vice-versa", completed: false}
  ]);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <h1>Task List {props.title} {props.subtitle}</h1>
      <ul>
        <button
          className="trigger"
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
          ))}
      </ul>
    </>
  );
};
