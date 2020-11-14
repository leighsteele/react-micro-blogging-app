import React from 'react';
import '../styles.css';
import UserForm from '../components/UserForm';

function UserPage() {
  return (
      <div className="container">
        <div className="row">
          <div className="mx-auto">
              <UserForm />
          </div>
        </div>
      </div>
  );
}

export default UserPage;
