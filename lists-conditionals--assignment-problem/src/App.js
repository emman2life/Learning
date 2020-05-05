import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'
import './App.css';

class App extends Component {
  state={
    inputTextLength:0,
    textArr:[]
  }
  changeListener =(event)=>{
    this.setState({
      inputTextLength  : event.target.value.length,
      textArr: event.target.value.split('')
    });
     
  }
  deleteHandler = (index)=>{
    const chars = this.state.textArr;
    const strings = [...chars];
    strings.splice(index,1);
    this.setState({textArr:strings});

  }
  render() {
    const style ={
      display: 'inline-block', 
    padding: '16px', 
    textAlign: 'center', 
      margin: '16px', 
      border: '1px solid black'};
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        {this.state.textArr.map((l,index)=>
          <CharComponent style={style} 
          key = {index}
          cIndex = {index}
          item={l}
          click={()=>this.deleteHandler(index)}/>
          )}
        
       <ValidationComponent inputTextLength={this.state.inputTextLength}/>
        <input type="text" onChange={this.changeListener}/>
      </div>
    );
  }
}

export default App;
