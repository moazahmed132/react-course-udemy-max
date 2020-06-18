import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'



const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Dou', age: 24 },
      { name: 'sara', age: 21 }
    ]
  });



  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'moaz', age: 21 },
        { name: 'Dou', age: 24 },
        { name: 'sara', age: 21 }
      ]
    })

  }

  return (
    <div className="App" >
      <h1 > i am a react app </h1>
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >
        My Hobby is swimming</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

    </div >
  );
  /* return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am a react app ya moaz')); */

}



export default App; 