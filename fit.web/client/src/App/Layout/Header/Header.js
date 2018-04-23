import { Component } from 'inferno';
import Logo from './logo';
import './Header.css';

class AppHeader extends Component {
  render(){
    return (
      <header className="App-header">
        <div className="header-container">
          <Logo width="50" height="50" />
          <h1 className="header-title">{`${this.props.title}`}</h1>
          <div className="header-links">{this.props.children}</div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
