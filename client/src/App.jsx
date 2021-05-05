import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import openSocket from "socket.io-client";
import "rsuite/dist/styles/rsuite-dark.css";
import "./assets/App.css";

function App() {
  const [time, setTime] = useState();

  useEffect(() => {
    const socket = openSocket("http://localhost:3000");
    socket.on("FromAPI", (data) => {
      setTime(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Router>
      <Navbar time={time} />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
