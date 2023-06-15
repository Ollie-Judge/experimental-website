import "./App.css";
import Header from "./components/header";
import HeaderDividerBottom from ".//components/dividers/headerDivider";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderDividerBottom />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
