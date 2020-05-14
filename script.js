const API = "https://programming-quotes-api.herokuapp.com/quotes/random";
const TWITTER_LINK = "https://twitter.com/intent/tweet?";

class Quote extends React.Component {
  render() {
    return (
      <div id="quote" className="d-flex flex-column justify-content-center">
        <blockquote className="blockquote m-3" >
          <p id="text" className="text-center mb-1">
            {this.props.quote}</p>
          <footer id="author" className="blockquote-footer text-right mr-5">
            {this.props.author}</footer>
        </blockquote>
      </div>
    );
  }
}

class QuoteControls extends React.Component {
  getQueryString(obj) {
    return Object.keys(obj).reduce((a, e) => {
      a.push(`${e}=${obj[e]}`);
      return a;
    }, []).join("&");
  }

  getTwitterLink(data) {
    const url = {
      text: encodeURIComponent(`"${data.quote}" ${data.author}.`),
      url: window.location.href,
      hashtags: encodeURIComponent("quotes, codingQuotes"),
      via: "piouson_code"
    }
    return `${TWITTER_LINK}${this.getQueryString(url)}`;
  }

  render() {
    const tweet_link = this.getTwitterLink(this.props.data);
    return (
      <div id="quote-controls" className="d-flex justify-content-between p-3 border-top">
        <div id="quote-share">
          <a id="tweet-quote" className="p-1" target="_blank"
            href={tweet_link}>
            <i className="fab fa-twitter twitter-share-button"></i></a>
        </div>
        <button id="new-quote" type="button" className="btn not-focusable"
          onClick={this.props.nextQuote} >New Quote</button>
      </div>
    );
  }
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      author: null
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({
        quote: data.en,
        author: data.author
      }));
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div id="quote-box" className="d-flex flex-column m-2 rounded">
        <h1 className="text-center border-bottom">Tech Quotes</h1>
        <Quote
          quote={this.state.quote}
          author={this.state.author} />
        <QuoteControls
          nextQuote={this.getQuote}
          data={this.state} />
      </div>
    );
  }
}

ReactDOM.render(
  <QuoteBox />,
  document.getElementById("root")
);
