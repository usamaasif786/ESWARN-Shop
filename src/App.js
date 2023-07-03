import Header from "./components/Header/Header.jsx";
import DetailPage from "./components/DetailPage/DetailPage";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer";
import "./components/Project.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={DetailPage} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
