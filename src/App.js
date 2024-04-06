import "./App.css";
import Button2 from "./components/Button2/Button2";
import SectionArticles from "./components/SectionArticles/SectionArticles";
export default function App() {
  function test() {
    console.log("test");
  }
  function test2() {
    console.log("dvsvds");
  }
  function test3() {
    console.log("hello");
  }
  return (
    <>
      <SectionArticles />
      <section>
        <div className="container">
          <Button2 text="Кнопка1" action={test} />
          <Button2 text="Кнопка2" action={test2} />
          <Button2 text="Кнопка3" action={test3} />
        </div>
      </section>
    </>
  );
}
