import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Posts />
      </main>
    </>
  );
}

export default App;
