import React, {Component} from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello Akash</h1>  
        {/* Sendig props to Ninjas Component*/}
        <Ninjas name="Akash" age="22" belt="black"/> 
        <Ninjas name="Anubhav" age="8" belt="yellow"/>  
      </div>
    );
  }
}

export default App;
