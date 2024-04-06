import './Button.css'

export default function Button({aText, anker}) {
  return (
    <a className="card_btn" href={anker}>
      {aText}
    </a>
  );
}
