import Card from "../card/card.component";
import "./card-list.styles.css";

type Monster = {
  id: string;
  name: string;
  email: string;
};

interface CardListProps {
  monsters: Monster[];
}

const CardList: React.FC<CardListProps> = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;