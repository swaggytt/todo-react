import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import todoPage from "./containers/todoPage/todoPage";
import createPage from "./containers/createPage/createPage";
import donePage from "./containers/donePage/donePage";
import contactPage from "./containers/contactPage/contactPage";
import Navbar from "./components/navbar";
import editPage from "./containers/editPage/editPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={todoPage} />
          <Route exact path="/create" component={createPage} />
          <Route exact path="/done" component={donePage} />
          <Route exact path="/contact" component={contactPage} />
          <Route exact path="/edit/:id" component={editPage} />
          <Route exact path="/done" component={donePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
