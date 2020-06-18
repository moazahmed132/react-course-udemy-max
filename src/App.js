import React from 'react';
import './App.css';

function App() {
  return (
    /* return (
        <div className="App" >
            <h1 > i am a react app </h1>
        </div >
    );
    ); */
    React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am a react app ya moaz')));
}



export default App; 