import RandomGenerator from "./components/quoteGenerator";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RandomAuthor from "./components/randomAuthor/randomAuthor";
import NotFound from "./components/hoc/notFound";
import { connect } from "react-redux";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={RandomGenerator}></Route>
          {props.loading ? (
            
            <Route path="/:authorName" exact component={RandomAuthor}></Route>
          ) : (
            <Route
              path="/:authorName"
              exact
              component={RandomGenerator}
            ></Route>
          )}
        </Switch>
        <footer className="footer">
          created by{" "}
          <a href="https:github.com/olayinkaatobiloye">Olayinka Atobiloye</a> -
          devChallenges.io
        </footer>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(App);
