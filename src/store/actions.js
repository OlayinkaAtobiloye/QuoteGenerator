import axios from "axios";

const setQuote = (quote) => {
  console.log("done")
  return {
    type: "REFRESH",
    quote: quote.data,
    loading: true
  };
};
const refresh = () => {
  let page = Math.floor(Math.random() * 4);
  return (dispatch) => {
    axios
      .get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?limit=1000&page=${page}`
      )
      .then((response) => dispatch(setQuote(response.data)));
  };
};

const setAuthorQuotes = (quotes, author) => {
  return {
    type: "GET_AUTHOR",
    quotes: quotes.data,
    author: author,
  };
};

export const getAuthorQuotes = (author) => {
  return (dispatch, getState) => {
    let prevAauthor = getState().author
    if (prevAauthor != author || getState().showAuthorQuotes == false){
      axios
      .get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
      .then((response) => dispatch(setAuthorQuotes(response.data, author)));
    }
    console.log(author);
    
  };
};

export default refresh;
