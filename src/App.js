import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/productos' component={Productos}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
