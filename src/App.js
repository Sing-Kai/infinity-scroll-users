import './App.css';
import { useEffect } from 'react';
import Users from '../src/components/Users'

import Posts from './components/Posts';

function App() {

  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">Users - Infitity Scroll </h1>
      <Users/> */}
      <Posts/>
    </div>
  );
}

export default App;
