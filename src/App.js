import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Pages/Sign-In/SignIn';
import NavBar from './Pages/Sign-In/NavBar';
import PermanentDrawerLeft from './Components/Drawer/Drawer';
import SignUp from './Pages/Sign-Up/SignUp';

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
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <PermanentDrawerLeft />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
