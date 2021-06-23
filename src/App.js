import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/SignIn-2/SignIn';
import NavBar from './Components/SignIn-2/NavBar';
import PermanentDrawerLeft from './Components/Drawer/Drawer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>Keel Baby !!!</h1>
          </div>
        </Route>
        <Route exact path="/login">
          <NavBar />
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <PermanentDrawerLeft />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
