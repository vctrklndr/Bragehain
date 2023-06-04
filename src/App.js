import Main from "./Components/Main/Main";
import Info from "./Components/Info/Info";
import Footer from "./Components/Footer/Footer";
import InfoData from "./Data/InfoData";
import MainData from "./Data/MainData";

function App() {
  return (
    <div className="App">
      <Main {...MainData} />
      <Info {...InfoData} />
      <Footer />
    </div>
  );
}

export default App;
