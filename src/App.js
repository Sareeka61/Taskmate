import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {

const info = "task";

  return (
    <div className="App">
      <Header />
      <TaskList info={info}/>
      <Footer />
    </div>
  );
}

export default App;
