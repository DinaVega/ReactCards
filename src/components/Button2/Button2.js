import "./Button2.css";

export default function Button2({ text, action }) {
  return (
    <button className="card_btn" onClick={action}>
      {text}
    </button>
  );
}
