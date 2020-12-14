import React, {Component} from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello Akash</h1>
        {/* Nesting Component */}
        <Ninjas />  
      </div>
    );
  }
}

export default App;
