import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {

  return (
      <Router>
        <Nav/>
          <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/Projects'>
                  <Projects/>
              </Route>
              <Route path='/About'>
                  <About/>
              </Route>
          </Switch>
      </Router>
    /*<div className="App flex flex-col justify-center items-center w-screen h-screen border-4">
      <div>
        <h1 className='text-xl font-bold font-sans'>Raj Shankar Tiwary</h1>
        <h3 className='font-normal'>Frontend Developer</h3>
        <p className='text-xs'>(Who also produces music and writes content)</p>
      </div>
    </div>*/
  );
}

export default App;
