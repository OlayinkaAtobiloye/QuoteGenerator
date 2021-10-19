import React from "react";
import Container from "../container/container";
import Quote from "../quote/quote";
import { connect } from "react-redux";
import { getAuthorQuotes } from "../../store/actions";


const RandomAuthor = (props) => {
  if (props.match) {
    props.getAuthorQuotes(props.match.url.slice(1));
  }
  return (
    <Container>
      <h1 className="authorHeader">{props.author}</h1>
      <div>
        {props.quotes.map((quote, index) => (
          <Quote key={index}>{quote}</Quote>
        ))}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
    author: state.author,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthorQuotes: (author) => dispatch(getAuthorQuotes(author)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomAuthor);
