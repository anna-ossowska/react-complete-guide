import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const params = useParams();
  console.log(params.quoteId);
  return (
    <section>
      <h1>Quote detail</h1>
      <p>{params.quoteId}</p>
    </section>
  );
};

export default QuoteDetail;
