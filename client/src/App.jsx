import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import openSocket from "socket.io-client";
import "./assets/App.css";

function App() {
  const [response, setResponse] = useState();

  useEffect(() => {
    const socket = openSocket();
    // const socket = io();
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </Router>
  );
}

export default App;
