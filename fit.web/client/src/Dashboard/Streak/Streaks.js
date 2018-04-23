import { Component } from 'inferno';
import './Streaks.css';

class Streaks extends Component {
  render() {
    return (
      <div className="streak-position">
        <span className="streak-display">
            {`${this.props.current} ${this.props.unit}`}
        </span>
      </div>
    );
  }
}

export default Streaks;
