import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PermanentDrawerLeft from './Components/Drawer/Drawer';
import UserProfile from './Pages/UserProfile/UserProfile';
import TopBar from './Components/TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar />
    </div>
  );
}

export default App;
