import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AllQuotes = () => {
  return (
    <Fragment>
      <h1>All quotes</h1>
      <ul>
        <li>
          <Link to="/quotes/q1">Quote 1</Link>
        </li>
        <li>
          <Link to="/quotes/p2">Quote 2</Link>
        </li>
        <li>
          <Link to="/quotes/p3">Quote 3</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default AllQuotes;
