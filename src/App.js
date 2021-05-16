import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Component/Pages/HomePage';
import CetegoryPage from './Component/Pages/CetegoryPage';
import ProductDetail from './Component/Pages/ProductDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path={`/cetegorypage/:category`} component={CetegoryPage} />
          <Route exact path={`/cetegorypage/:category/:name/:id`} component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
