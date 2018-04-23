import { Component } from 'inferno';
import './Main.css';

class AppMain extends Component {
  render() {
    return (
      <main className="App-Main">
        <div className="main-container">
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default AppMain;
