import { Fragment } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return (
    <Fragment>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuote;
