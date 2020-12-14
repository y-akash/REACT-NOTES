import React, {Component} from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas : [
              { name: 'Ryu', age: 30, belt: 'black', id: 1 },
              { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
              { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja)=>{
    ninja.id=this.state.ninjas[this.state.ninjas.length-1].id+1;
    console.log(ninja);
    let ninjas=[...this.state.ninjas,ninja];  // spread operator
    this.setState({
      ninjas:ninjas
    });
  }

  render(){
    return (
      <div className="App">
        <h1>Hello Akash</h1>  
        <Ninjas ninjas={this.state.ninjas}/>  
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
