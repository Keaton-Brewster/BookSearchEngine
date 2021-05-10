import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import "rsuite/dist/styles/rsuite-dark.css";
import "./assets/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
