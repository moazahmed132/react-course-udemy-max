import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1341, name: 'Maxi', age: 28 },
      { id: 1349, name: 'Dou', age: 24 },
      { id: 1348, name: 'sara', age: 21 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: ' lightgreen',
        color: 'black'

      }

    };

    let persons = null;

    if (this.state.showPersons) {

      persons = (

        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })

          }
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
      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: ' blue',
        color: 'black'

      }

    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('blue')
    }



    return (
      <div className="App" >
        <h1 className={classes.join(' ')}> i am a react app </h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Names</button>

        {persons}

      </div >

    );
    /* return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am a react app ya moaz')); */
  }
}

export default App 