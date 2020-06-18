import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App" >
      <h1 > i am a react app </h1>
      <Person />
      <Person name="moaz" age="21" />
      <Person name="max" age="28" >My Hobby is swimming</Person>
      <Person name="Dou" age="25" />

    </div >
  );
  /* return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am a react app ya moaz')); */

}


export default App; 