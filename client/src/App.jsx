import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Search from "./pages/Search";
// import Saved from "./pages/Saved";
import openSocket from "socket.io-client";
import "./assets/App.css";

import Books from "./pages/Books";

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
        <Route path="/" component={Books} />
        {/* <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} /> */}
      </Switch>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </Router>
  );
}

export default App;
