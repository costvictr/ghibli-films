import "./Card.css";
import type { Film } from "../../services/ghibli";

type CardProps = Omit<Film, "id">;

const Card = ({ image, title, description, director }: CardProps) => {
  return (
    <article className="container">
      <img src={image} alt={title} loading="lazy" />
      <div className="content">
        <h2>{title}</h2>
        <p className="director">Director: {director}</p>
        <p className="description">{description}</p>
      </div>
    </article>
  );
};

export default Card;
