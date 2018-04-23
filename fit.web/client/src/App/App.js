import { version, Component } from 'inferno';
import { BrowserRouter, Route, Switch, Link } from 'inferno-router';
import AppHeader from './Layout/Header/Header';
import AppMain from './Layout/Main/Main';
import AppFooter from './Layout/Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import './registerServiceWorker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div>
              <AppHeader title="Get Fit">
                <i class="material-icons header-menu">menu</i>
                <ul className="app-header-list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </AppHeader>
              <AppMain>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                </Switch>
              </AppMain>
            </div>
          </BrowserRouter>
          <AppFooter />
      </div>
    );
  }
}

export default App;
