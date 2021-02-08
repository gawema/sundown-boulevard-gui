import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import 'antd/dist/antd.css';

import { Route, BrowserRouter as Router } from "react-router-dom";

import Drinks from './pages/drinks/Drinks';
import Header from './components/Header'
import Home from './pages/home/Home';
import Meals from './pages/meals/Meals';
import Order from './pages/order/Order';
import Receipt from './pages/receipt/Receipt';

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
