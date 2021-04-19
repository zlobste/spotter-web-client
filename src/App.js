import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <ThemeProvider>
        <CSSReset />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
export default App;
