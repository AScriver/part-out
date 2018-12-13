import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


ReactDOM.render(<App />, document.getElementById("root"));

////////////////////// TODO ///////////////////////////////

// Bad idea to set all params as optional and have a truely SPA?
// if previous path = "/" -> show bootstrap alert saying you need to login first
// add frontend API calls for post, update, delete, and getAll posts
// backend routes to post the actual data
// if user picture upload is too difficult / memory heavy, implement the imgur picture uploader
// messaging system