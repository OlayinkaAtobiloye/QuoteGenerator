import Container from "../container/container";
import Quote from "../quote/quote";
import Author from "../author/author";
import React from "react";
import { connect } from "react-redux";

const RandomQuote = (props) => {
  return (
    <Container>
      <Quote>{props.quote}</Quote>
      <Author></Author>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quotes[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({ type: "REFRESH" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuote);
