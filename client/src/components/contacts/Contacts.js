import React, { Fragment, useContext, useEffect } from 'react';
import './Contacts.scss';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if(contacts !== null && contacts.length === 0 && !loading) {
        return <h4 className="uk-text-muted uk-text-center">You have no contacts yet</h4>
    }

    return (
        <Fragment>
            {contacts !== null && !loading ? <Fragment>
                {filtered !== null ? filtered.map(contact => (<ContactItem contact={contact} key={contact.id} />)) : contacts.map(contact => (
                    <ContactItem contact={contact} key={contact.id} />
                ))}
            </Fragment> : <Spinner />}
        </Fragment>
    )
}

export default Contacts;
