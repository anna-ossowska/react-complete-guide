import classes from './Auth.module.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';

const Auth = (props) => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const dispatch = useDispatch();

  const logInHandler = (e) => {
    e.preventDefault();

    if (
      emailRef.current.value.trim() !== '' &&
      passwordRef.current.value.trim() !== ''
    ) {
      dispatch(authActions.logIn());
      emailRef.current.value = '';
      passwordRef.current.value = '';
    } else {
      return;
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={logInHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="true"
              ref={passwordRef}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
