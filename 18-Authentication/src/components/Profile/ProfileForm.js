import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const idToken = authCtx.token;

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCXnEo1Yig7-efQluf-mhOCal_Ed8C8ck0',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: idToken,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
      }
    ).then((res) => {
      // assumption: Always succeeds
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
