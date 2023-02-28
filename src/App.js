import './App.css';
import { useEffect } from 'react';
import Users from '../src/components/Users'

function App() {

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Users - Infitity Scroll </h1>
      <Users/>
    </div>
  );
}

export default App;
