const initialState = {
  quotes: [
    "“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”",
  ],
  author: "Bill Gates",
  genre: "business",
  showAuthorQuotes: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REFRESH":
      let index = Math.floor(Math.random() * 1000);
      let quotes = action.quote[index];
      return {
        ...state,
        quotes: [quotes.quoteText],
        author: quotes.quoteAuthor,
        genre: quotes.quoteGenre,
        showAuthorQuotes: false,
      };

    case "GET_AUTHOR":
      return {
        ...state,
        quotes: action.quotes.map((quote) => quote.quoteText),
        showAuthorQuotes: true,
        author: action.author,
      };

    default:
      break;
  }
  return state;
};

export default Reducer;
