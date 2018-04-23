import { Component } from 'inferno';
import './Card.css';

class Card extends Component {
  render() {
    return(
      <section className="card-layout">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Card;
