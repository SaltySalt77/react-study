import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={["React", "TypeScript"]} />
    </div>
  );
}

export default App;
