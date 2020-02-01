import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        if(error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if(password !== password2) {
            setAlert('Passwords do not match!', 'danger');
        } else {
            register({
                name,
                email,
                password
            });
        }
    }

    return (
        <div className="form uk-container uk-container-small uk-margin-medium-top">
            <h3 className="uk-text-uppercase">Create an Account</h3>
            <form className="uk-form-stacked" onSubmit={handleSubmit}>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="name">Name</label>
                    <div className="uk-form-controls">
                        <input 
                            className="uk-input" 
                            id="name" 
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="email">E-mail</label>
                    <div className="uk-form-controls">
                        <input 
                            className="uk-input" 
                            id="email" 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="E-mail"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="password">Password</label>
                    <div className="uk-form-controls">
                        <input 
                            className="uk-input" 
                            id="password" 
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                            minLength="6"
                        />
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="password2">Confirm password</label>
                    <div className="uk-form-controls">
                        <input 
                            className="uk-input" 
                            id="password2" 
                            type="password"
                            name="password2"
                            value={password2}
                            placeholder="Confirm password"
                            onChange={handleChange}
                            required
                            minLength="6"
                        />
                    </div>
                </div>
                <input 
                    className="uk-button uk-button-primary uk-button-small" 
                    type="submit" 
                    value="Create" 
                />
                <div className="uk-align-right">
                    Have an account? <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;
