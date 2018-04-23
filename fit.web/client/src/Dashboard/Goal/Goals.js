import { Component } from 'inferno';
import './Goals.css';

class Goals extends Component {
  mapGoals(mappedGoals) {
    return mappedGoals.map((goal, index) => 
      <li key={index}>
        <span className="goal-name">{goal.Name}</span>
        <progress value={goal.Progress} max="100" className="goal-progress" />
      </li>
    );
  }

  render() {
    const list = this.mapGoals(this.props.list);
    return (
      <ul className="goals-list">{list}</ul>
    );
  }
} 

export default Goals;
