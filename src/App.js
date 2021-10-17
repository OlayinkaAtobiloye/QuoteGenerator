import RandomGenerator from "./components/quoteGenerator";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RandomAuthor from "./components/randomAuthor/randomAuthor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={RandomGenerator}></Route>
          <Route path="/:authorName" component={RandomAuthor}></Route>
        </Switch>
        <footer className="footer">
          created by <a href="https:github.com/olayinkaatobiloye">Olayinka Atobiloye</a> -
          devChallenges.io
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
