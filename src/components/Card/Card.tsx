import "./Card.css";
import type { Film } from "../../services/ghibli";

type CardProps = Omit<Film, "id">;

const Card = ({ image, title, description, director }: CardProps) => {
  return (
    <div className="container">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <p className="director">Diretor: {director}</p>
    </div>
  );
};

export default Card;
