import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {id: 1337, name: "Do react projects", completed: true}, {id: 1338, name: "Contemplate what's wrong with my life", completed: true}, {id: 1339, name: "Fold clothes of your bed and don't throw on chair & vice-versa", completed: false}
  ]);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name} </span>
            <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
