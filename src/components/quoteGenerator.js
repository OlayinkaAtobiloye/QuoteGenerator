import RandomQuote from "./randomQuote/randomQuote";
import RandomAuthor from "./randomAuthor/randomAuthor";
import { connect } from "react-redux";
import React from "react";

const RandomGenerator = (props) => {
  return props.showAuthorQuotes ? <RandomAuthor /> : <RandomQuote />;
};
const mapStateToProps = (state) => {
  return {
    showAuthorQuotes: state.showAuthorQuotes,
  };
};

export default connect(mapStateToProps, null)(RandomGenerator);
