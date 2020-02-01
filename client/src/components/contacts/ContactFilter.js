import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const text = useRef('');

    const { filterContacts, clearFilter, filtered } = contactContext;

    useEffect(() => {
        if(filtered === null) {
            text.current.value = ''; 
        }
    });

    const handleChange = e => {
        if(text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input 
                ref={text}
                className="uk-input uk-form-small"
                type="text" 
                placeholder="Filter contacts"
                onChange={handleChange} 
            />
        </form>
    )
}

export default ContactFilter;
