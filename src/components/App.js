import '../App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Account from './Account';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';
import { UserProvider } from '../context/user';

function App() {

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/account'>
            <Account />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
