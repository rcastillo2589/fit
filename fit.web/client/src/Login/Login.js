import { Component } from 'inferno';
import Card from '../Shared/Card/Card';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-center">
        <Card title="" height="300px" width="40%">
          <h1>Login</h1>
          <button className="login-btn">Login</button>
        </Card>
      </div>
    );
  }
}

export default Login;
