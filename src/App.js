import "./App.css";
import Header from "./components/header";
import HeaderDividerBottom from ".//components/dividers/headerDivider";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderDividerBottom />
      <Content />
    </div>
  );
}

export default App;
