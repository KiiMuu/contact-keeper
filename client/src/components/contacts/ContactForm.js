import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, updateContact, clearCurrent, current } = contactContext;

    useEffect(() => {
        if(current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const handleChange = e => setContact({
        ...contact,
        [e.target.name]: e.target.value
    });

    const handleSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="uk-text-uppercase">{current ? 'Edit Contact' : 'Add Contact'}</h3>
            <input
                className="uk-input"
                type="text" 
                placeholder="Name" 
                name="name" 
                value={name} 
                onChange={handleChange} 
            />
            <input 
                className="uk-input"
                type="email" 
                placeholder="Email" 
                name="email" 
                value={email} 
                onChange={handleChange} 
            />
            <input
                className="uk-input"
                type="text" 
                placeholder="Phone" 
                name="phone" 
                value={phone} 
                onChange={handleChange} 
            />
            <h5>Contact type: </h5>
            <input
                className="uk-radio"
                type="radio" 
                name="type" 
                value="personal" 
                checked={type === 'personal'} 
                onChange={handleChange} 
            /> Personal{' '}
            <input
                className="uk-radio"
                type="radio" 
                name="type" 
                value="professional" 
                checked={type === 'professional'} 
                onChange={handleChange} 
            /> Professional{' '}
            <div className="uk-margin-small-top">
                <input type="submit" value={current ? 'Update' : 'Add'} className="uk-button uk-button-secondary uk-button-small" />
            </div>
            {current && <div>
                <button className="uk-button uk-button-secondary uk-button-small uk-margin-small-top" onClick={clearAll}>
                    Clear
                </button>
            </div>}
        </form>
    )
}

export default ContactForm;
