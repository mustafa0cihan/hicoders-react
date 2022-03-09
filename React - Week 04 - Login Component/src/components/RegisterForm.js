import React, { useState } from 'react'

const RegisterForm = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }

        setRecords([...records, newRecord]);

        setUserRegistration({ username: "", email: "", password: "", repassword: "" })
    }

    return (
        <main>
            <h2>Sign Up</h2>
            <form className='form-inner' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type="text" autoComplete="off" placeholder="Username" value={userRegistration.username} onChange={handleInput} name="username" id="username" />
                </div>

                <div className='form-group'>
                    <input type="email" autoComplete="off" placeholder="Email" value={userRegistration.email} onChange={handleInput} name="email" id="email" />
                </div>

                <div className='form-group'>
                    <input type="password" autoComplete="off" placeholder="Password" value={userRegistration.password} onChange={handleInput} name="password" id="password" />
                </div>

                <div className='form-group'>
                    <input type="password" autoComplete="off" placeholder="Password Confirm" value={userRegistration.repassword} onChange={handleInput} name="repassword" id="repassword" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <div>
                {records.map((curElem) => {
                    return (
                        <div className="showDataStyle">
                            <h2>Your Information</h2>
                            <p>Username :{curElem.username}</p>
                            <p>E-mail :{curElem.email}</p>
                            <p>Password: {curElem.password}</p>
                        </div>
                    )
                })}
            </div>
        </main>

    )
};

export default RegisterForm;