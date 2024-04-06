import "./Card.css";
import Button from "../Button/Button";

export default function Card({ img, alt, time, h2, p, anker}) {
  return (
    <div className="card">
      <div className="card_img">
        <img src={img} alt={alt} />
      </div>
      <div className="card_text">
        <time>{time}</time>
        <h2 className="card_title">{h2}</h2>
        <p>{p}</p>
        <Button aText="Подробнее" anker={anker} />
      </div>
    </div>
  );
}
