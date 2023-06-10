import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import Info from "./Components/Info/Info";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Page from "./Data/Page.json";

function App() {
  const { navigation, main, info, faq, footer } = Page;

  return (
    <div className="App">
      <Navigation {...navigation} />
      <Main {...main} />
      <Info {...info} />
      <Faq {...faq} />
      <Footer {...footer} />
    </div>
  );
}

export default App;
