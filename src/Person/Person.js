import React from 'react'

const Person = (props) => {
  return (
    <div>
      <p>I am a person </p>
      <p>I am a {props.name} and I am {props.age} years old </p>
    </div>
  )
}
export default Person;
