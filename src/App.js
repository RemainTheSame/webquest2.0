
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CharacterCreation from "./components/CharacterCreation";
import Campaigns from "./components/Campaigns";

function navOnClick() {
    
}


function App() {
  return (
      <Router>
          <div className="App">
          <header className="header">
              <Link to={"/"}>Home</Link>
              <Link to={"/campaigns"}>Campaigns</Link>
              <Link to={"/creation"}>Create Character</Link>
              <Link to={"/help"}>Help</Link>

          </header>
          <main>
              <Switch>
                  <Route path={"/creation"}>
                      <CharacterCreation/>
                  </Route>
                  <Route path={"/campaigns"}>
                      <Campaigns/>
                  </Route>
                  <Route path={"/help"}>
                      <div>Help Mee</div>
                  </Route>
                  <Route path={"/"}>
                      <div>Home</div>
                  </Route>


              </Switch>

          </main>
      </div></Router>

  );
}

export default App;
