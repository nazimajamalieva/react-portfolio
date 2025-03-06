import "./App.css";
import LeftHeader from "./components/leftHeader/LeftHeader";

const partOfHeader = {
  title: "Hi, I am John, Creative Technologist",
  desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  btn: "Download Resume",
};

function App() {
  return (
    <>
      <LeftHeader
        title={partOfHeader.title}
        desc={partOfHeader.desc}
        btn={partOfHeader.btn}
      />
    </>
  );
}

export default App;
