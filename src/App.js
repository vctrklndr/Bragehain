import Main from "./Components/Main/Main";
import Info from "./Components/Info/Info";
import InfoData from "./Data/InfoData";

function App() {
  return (
    <div className="App">
      <Main />
      <Info {...InfoData} />
    </div>
  );
}

export default App;
