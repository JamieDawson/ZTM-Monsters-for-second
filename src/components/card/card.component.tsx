import { Component } from "react";
import "./card.styles.css";

interface Monster {
  id: string;
  name: string;
  email: string;
}

interface CardProps {
  monster: Monster;
}

class Card extends Component<CardProps> {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;