import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Dou', age: 24 },
      { name: 'sara', age: 21 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Dou', age: 24 },
        { name: 'sara', age: 28 }
      ]
    })
  }
  render() {
    return (
      <div className="App" >
        <h1 > i am a react app </h1>
        <button onClick={() => this.switchNameHandler('khalaf el dahshory')}>Switch Names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          switchNameHandler={this.switchNameHandler.bind(this, 'khalaf el wage3')} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >
          My Hobby is swimming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />


      </div >
    );
    /* return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am a react app ya moaz')); */
  }
}

export default App;