import { Component } from 'inferno';
import Card from '../Shared/Card/Card';
import Goals from './Goal/Goals';
import Calories from './Calorie/Calories';
import Streaks from './Streak/Streaks';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4200/v1/goals")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ 
          goals: data
        });
      })
      .catch(() => {
        this.setState({
          goals: [{
              Name: '175 lbs',
              Progress: '75'
            },
            {
              Name: '32 Jeans',
              Progress: '10'
            }
          ]
        })
      });
  }

  render() {
    return (
      <div>
        <Card title="Goals">
          <Goals list={this.state.goals} />
        </Card>
        <Card title="Calories">
          <Calories current="200" total="500" />
        </Card>
        <Card title="Streak">
          <Streaks current="10" unit="Days" />
        </Card>
      </div>
    );
  }
}

export default Dashboard;
