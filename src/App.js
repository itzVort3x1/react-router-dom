import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LobbyPage from './components/lobby';
import DashboardPage from './components/dashboard';

//^5.3.3 use this version of react router dom

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LobbyPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
