import { version, Component } from 'inferno';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'inferno-router';
import AppHeader from './Layout/Header/Header';
import AppMain from './Layout/Main/Main';
import AppFooter from './Layout/Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import './registerServiceWorker';
import './App.css';

const fakeAuth = {
  isAuthenticated: false
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

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
                  <Route exact path="/login" component={Login} />
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
