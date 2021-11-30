import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://gaportfolio-backend.herokuapp.com/";
  // const URL = "http://localhost:4000/";
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
        <div className="HomeMainDiv">
          <About URL={URL} />
        </div>
        </Route>
        {/* 
        <Route path="/about">
          <div className="aboutMainDiv">
            <About URL={URL} />
          </div>
        </Route>
        */}
        <Route path="/projects">
          <div className="portMainDiv">
            <Projects URL={URL} />
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;