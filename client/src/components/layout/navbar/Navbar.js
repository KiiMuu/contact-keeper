import React, { Fragment, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth/authContext';
import ContactContext from '../../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;

    const handleLogout = () => {
        logout();
        clearContacts();
    }

    const authLinks = (
        <Fragment>
            <ul className="uk-navbar-nav uk-visible@s">
                <li>
                    <a href="#!">Hello, {user && user.name}</a>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <a href="#!" onClick={handleLogout}>Logout</a>
                </li>
            </ul>
            {/* Show Nav items in sidebar in phone screens */}
            <div className="sidebar uk-hidden@s">
                <span className="uk-button sidebar-btn" type="button" data-uk-toggle="target: #offcanvas-overlay">Sidebar</span>
                <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
                    <div className="uk-offcanvas-bar">
                        <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                        <Link className="logo" to="/"><i className={icon}></i> {title}</Link>
                        <ul className="uk-nav uk-nav-default">
                            <li><a href="#!">Hello, {user && user.name}</a></li>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <a href="#!">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <ul className="uk-navbar-nav uk-visible@s">
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
            {/* Show Nav items in sidebar in phone screens */}
            <div className="sidebar uk-hidden@s">
                <span className="uk-button sidebar-btn" type="button" data-uk-toggle="target: #offcanvas-overlay">Sidebar</span>
                <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
                    <div className="uk-offcanvas-bar">
                        <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                        <Link className="logo" to="/"><i className={icon}></i> {title}</Link>
                        <ul className="uk-nav uk-nav-default">
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    return (
        <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <div className="navbar">
                <div className="navbar-content">
                    <nav className="uk-navbar-container uk-navbar-transparent uk-container" data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <Link to="/"><i className={icon}></i> {title}</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            {isAuthenticated ? authLinks : guestLinks}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;
