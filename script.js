class Quote extends React.Component {
  render() {
    return (
      <div id="quote" className="d-flex flex-column justify-content-center">
        <blockquote className="blockquote" ></blockquote>
        <p id="text" className="blockquote text-center">
          {this.props.quote}</p>
        <footer id="author" className="align-self-end pr-5 blockquote-footer">
          {this.props.author}</footer>
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
            <i class="fab fa-twitter"></i></a>
          <a id="tweet-quote" href="#" className="p-1" target="_blank">
            <i class="fab fa-instagram"></i></a>
        </div>
        <button id="new-quote" type="button"
          className="btn" >New Quote</button>
      </div>
    );
  }
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: null }
  }

  render() {
    return (
      <div id="quote-box" className="d-flex flex-column m-2 rounded">
        <h1 className="text-center border-bottom">Tech Quotes</h1>
        <Quote
          quote="quote text goes here"
          author="quote author" />
        <QuoteControls />
      </div>
    );
  }
}

ReactDOM.render(
  <QuoteBox />,
  document.getElementById("root")
);
