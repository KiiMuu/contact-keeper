import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = props => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        if(error === 'Invalid credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if(email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    }

    return (
        <div className="form uk-container uk-container-small uk-margin-medium-top">
            <h3 className="uk-text-uppercase">Account Login</h3>
            <form className="uk-form-stacked" onSubmit={handleSubmit}>
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
                        />
                    </div>
                </div>
                <input 
                    className="uk-button uk-button-primary uk-button-small" 
                    type="submit" 
                    value="Login" 
                />
                <div className="uk-align-right">
                    Haven't an account? <Link to='/register'>Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
