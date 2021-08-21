import { Fragment } from 'react';
import { Route, useParams, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
  const params = useParams();

  const DUMMY_QUOTES = [
    { id: 'q1', author: 'John', text: 'Random quote 1' },
    { id: 'q2', author: 'Jane', text: 'Random quote 2' },
  ];

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found.</p>;
  }

  // if (!quote) {
  //   return <NotFound />;
  // }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat">
            Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
