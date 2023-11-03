export const TaskCard = ({ task, handleDelete, info }) => {
    return (
        <li
              className={task.completed ? "completed" : "incompleted"}
            >
              <span>
                {task.id} - {task.name} - {info}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
    )
}