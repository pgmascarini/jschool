
import './App.css';
import Footer from './components/commons/Footer';
import Header from './components/commons/Header';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Private from './components/pages/Private';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <Router>

      <Header></Header>

      <Switch>
        <Route path="/contato">
          <Contact />
        </Route>
        <Route path="/private">
          <Private />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer></Footer>

    </Router>
  );
}

export default App;
