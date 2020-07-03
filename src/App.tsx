import React from 'react';
import './App.css';

function App() {

  const request = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  }

  return (
    <div className="App">
        <button onClick={request}>Запрос</button>
    </div>
  );
}

export default App;
