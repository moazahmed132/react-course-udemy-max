import React from 'react'
import './Person.css'

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.switchNameHandler}>I am a {props.name} and I am {props.age} years old </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChangeHandler} value={props.name} />
    </div>
  )
}

export default Person;
