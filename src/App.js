import './App.css';
import Header from './components/Header'
import Home from './screens/Home';
import Meals from './screens/Meals';
import Drinks from './screens/Drinks';
import Order from './screens/Order';
import Receipt from './screens/Receipt';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="screen-container">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/select-meal" component={Meals} />
        <Route exact path="/select-drinks" component={Drinks} />
        <Route exact path="/place-order" component={Order} />
        <Route exact path="/receipt" component={Receipt} />
      </Router>
      </div>
    </div>
  );
}

export default App;
