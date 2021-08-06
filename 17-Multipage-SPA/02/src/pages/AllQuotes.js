import { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = () => {
  const DUMMY_QUOTES = [
    { id: 'q1', author: 'John', text: 'Random quote 1' },
    { id: 'q2', author: 'Jane', text: 'Random quote 2' },
  ];

  return (
    <Fragment>
      <h1>All quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
