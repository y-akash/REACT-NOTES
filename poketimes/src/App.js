import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';  // install from npm
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// the react router automatically applies the few property to props when it redirects.
// for that it comes in <Route> tag. for example <Route exact path='/' component={Home}/>
// so after redirect the props will get few property.


// if we try to print that property in <Navbar> than it will print blank bcoz it is not under <Route>.

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
