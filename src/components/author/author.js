import React from "react";
import "./author.css";
import { connect } from "react-redux";
// import {ge} from "redux"
import { getAuthorQuotes } from "../../store/actions";

const Author = (props) => {
  return (
    <aside
      className="Author"
      onClick={() => props.getAuthorQuotes(props.author)}
    >
      <p className="authorName">{props.author}</p>
      <p className="authorInd">{props.genre}</p>
      <span class="material-icons arrow">arrow_right_alt</span>
    </aside>
  );
};

const mapStateToProps = (state) => {
  return {
    author: state.author,
    genre: state.genre,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthorQuotes: (author) => dispatch(getAuthorQuotes(author)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);
