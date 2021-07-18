import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
