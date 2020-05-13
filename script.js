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
  render() {
    return (
      <div id="quote-controls" className="d-flex justify-content-between p-3 border-top">
        <div id="quote-share">
          <a id="tweet-quote" href="#" className="p-1" target="_blank">
            <i className="fab fa-twitter"></i></a>
          <a id="insta-quote" href="#" className="p-1" target="_blank">
            <i className="fab fa-instagram"></i></a>
        </div>
        <button id="new-quote" type="button"
          className="btn" >New Quote</button>
      </div>
    );
  }
}

const URL = "https://programming-quotes-api.herokuapp.com/quotes/random";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      author: null
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        quote: data.en,
        author: data.author
      }));
  }

  componentDidMount() {
    this.getQuote(URL);
  }

  render() {
    return (
      <div id="quote-box" className="d-flex flex-column m-2 rounded">
        <h1 className="text-center border-bottom">Tech Quotes</h1>
        <Quote
          quote={this.state.quote}
          author={this.state.author} />
        <QuoteControls />
      </div>
    );
  }
}

ReactDOM.render(
  <QuoteBox />,
  document.getElementById("root")
);
