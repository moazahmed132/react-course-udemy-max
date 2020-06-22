import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Dou', age: 24 },
      { name: 'sara', age: 21 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 21 },
        { name: 'Dou', age: 24 },
        { name: 'sara', age: 28 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            switchNameHandler={this.switchNameHandler.bind(this, 'khalaf el wage3')}
            nameChangeHandler={this.nameChangeHandler} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          >
            My Hobby is swimming</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      )
    }



    return (
      <div className="App" >
        <h1 > i am a react app </h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Names</button>

        {persons}

      </div >
    );
    /* return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am a react app ya moaz')); */
  }
}

export default App;