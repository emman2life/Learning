import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [{
       id:'id1', name: "Emmanuel", age: 36 },
     {id:'id2', name: "Silvia", age: 30 },
      {id:'id3', name: "Ephraim", age: 0.9 }],
    showPersons:false
  }
  handleClick = (newName) => {
    this.setState({
      persons: [{ name: newName, age: 36 }, { name: "Silvia", age: 30 }, { name: "Ehis", age: 0.9 }]
    })
  }
  nameChangeHandler = (event,id) => {
    
    const personIndex = this.state.persons.findIndex(p=>p.id===id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
  
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    })
    // this.setState({
    //   persons: [
    //     { name: "Emmanuel", age: 36 },
    //     { name: event.target.value, age: 30 },
    //     { name: "Ehis", age: 0.9 }
    //   ]
    // })
  }
  handleCopy = () => {
    console.log("Was copied")
  }
  deletePersonHandler=(personIndex)=>{
    
    //const pers = this.state.persons.slice();
    const pers = [...this.state.persons];
    pers.splice(personIndex,1);
   
    this.setState({ persons:pers});
  }
  handleButtonToggle = ()=>{
const show = this.state.showPersons;
this.setState({
  showPersons: !show
});
  }


  render() {
let persons = null;
if(this.state.showPersons===true){
  
 persons = (<div>
   {this.state.persons.map((p,index)=>{
    return <Person
         key={p.id}
        click={()=>this.deletePersonHandler(index)}
          name={p.name}
          age={p.age}
          change={(event)=>this.nameChangeHandler(event, p.id)}
        />}
  )}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person name={this.state.persons[2].name} age={this.state.person[2].age}>I love to play</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.handleClick.bind(this, "Williams")}
          change={this.nameChangeHandler}
        /> */}
        </div>);
}

    return (
      <div className="App">
        <button onClick={this.handleButtonToggle}>Switch name</button>
        <h1>Hi i'm react App</h1>
       {persons}
      </div>
    );
  }
}

export default App;
