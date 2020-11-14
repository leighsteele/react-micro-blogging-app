import React, { useState, useEffect } from 'react';

const UserForm = () => {
    const [userName, setUserName] = useState('');

    const handleOnChange = (event) => {
        setUserName(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userName', userName);
    }
    
    useEffect(() => {
        const userName = localStorage.getItem('userName');
        setUserName(userName);
    }, [])

    return (
        <div className="profile-wrapper">
            <h1 className="mb-4">Profile</h1>
            <h5>User Name</h5>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <input className="form-control user-input-custom"
                    type="text"
                    value={userName}
                    onChange={(event) => handleOnChange(event)}
                />
                <button className="btn btn-primary float-right mt-2 float-right" type="submit">Save</button>
            </form>
        </div>
    );
}

export default UserForm;