import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';  // install from npm
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          {/* when we try to go contact or about  url it will show contact or about component */}
          {/* and after that also shows post component */}
          {/* bcoz it is considering  /something so /contact and /post_id matches with them. */}
          {/* so to avoid this we will use switch in 32-switch branch */}
          <Route path="/:post_id" component={Post}/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
