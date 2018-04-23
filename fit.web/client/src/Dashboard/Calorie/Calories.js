import { Component } from 'inferno';
import './Calories.css';

class Calories extends Component {
  render() {
    return (
      <div className="calorie-position">
        <span className="calorie-display">
            {`${this.props.current} of ${this.props.total}`}
        </span>
      </div>
    );
  }
}

export default Calories;
