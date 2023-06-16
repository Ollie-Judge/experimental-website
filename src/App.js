import "./App.css";
import Header from "./components/header";
import HeaderDividerBottom from ".//components/dividers/headerDivider";
import GreenBlob from "./components/greenBlob";
import LightYellowBlob from "./components/yellowBlob";
import Footer from "./components/footer";
import "./assets/fonts.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderDividerBottom />
      <GreenBlob />
      <LightYellowBlob />
      <Footer />
    </div>
  );
}

export default App;
