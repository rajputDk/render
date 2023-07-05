import React, { Component } from 'react'
import About from './components/About';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      person:[
        {
          name:"deepak",
          age:24
        },
        {
          name:"akash",
          age:20
        },
        {
          name:"santosh",
          age:26
        },
      ]
    }
  }
  render() {
    let person;
    person=this.state.person.map((p)=>{
     return(
      <About name={p.name} age={p.age}/>
     )
    })
    return (
      <div>
     <h1>{person}</h1>
      </div>
    )
  }
}
