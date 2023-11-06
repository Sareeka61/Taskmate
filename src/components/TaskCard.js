import "./TaskCard.css";
import styles from "./TaskCard.module.css";

export const TaskCard = ({ task, handleDelete, info }) => {
    return (
      <div className="taskcard ">
        <li
              className={ task.completed ? "completed" : "incompleted" }
            >
              <span className= {styles.title}>
                {task.id} - {task.name} - {info}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
            </div>
    )
}