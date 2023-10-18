import { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <TaskList title="Random" subtitle="Test"/>
    </div>
  );
}

export default App;
