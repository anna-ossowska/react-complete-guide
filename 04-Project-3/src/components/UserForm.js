import React from 'react';
import styles from './UserForm.module.css';
import Button from '../UI/Button';

const UserForm = (props) => {
  return (
    <div>
      <form>
        <div className={styles['form-controls']}>
          <div>
            <label>User Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Age</label>
            <input type="number" />
          </div>
          <div className="btn-control">
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
