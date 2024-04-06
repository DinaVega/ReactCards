import "./SectionArticles.css";
import card1 from "./img/card1.jpg";
import card2 from "./img/card2.jpg";
import card3 from "./img/card3.jpg";
import Card from "../Card/Card"


export default function SectionArticles() {
  return (
    <section className="articles">
      <div className="container">
        <h1 className="section_title">Статьи1111</h1>
        <div className="cards">
          <Card
            img={card1}
            alt="человек в медицинской маске"
            time="05.03.2021"
            h2="Режим использования масок и перчаток на территории магазинов"
            p='Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'
            anker="##"
          />
          <Card
            img={card2}
            alt="жасмин на фоне неба"
            time="05.03.2021"
            h2="Весеннее настроение для каждой"
            p="8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий."
            anker="###"
          />
          <Card
            img={card3}
            alt="полезная и вредная пища"
            time="22.02.2020"
            h2="ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!"
            p="Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!"
            anker="####"
          />
        </div>
      </div>
    </section>
  );
}
