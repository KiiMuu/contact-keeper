import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { _id, name, email, phone, type } = contact;

    const handleDelete = () => {
        deleteContact(_id);
        clearCurrent();
    }

    return (
        <div className="uk-card uk-card-default uk-card-body uk-animation-slide-top-medium">
            <h3 className="uk-card-title">{name}{' '} <span className={'uk-align-right uk-text-capitalize uk-label ' + (type === 'professional' ? 'uk-label-success' : '')}>{type}</span></h3>
            <ul className="uk-list">
                {email && (<li>
                    <i className="fas fa-envelope-open"></i> {email}
                </li>)}
                {phone && (<li>
                    <i className="fas fa-phone"></i> {phone}
                </li>)}
            </ul>
            <p>
                <button className="uk-button uk-button-secondary uk-button-small uk-margin-small-right" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="uk-button uk-button-danger uk-button-small" onClick={handleDelete}>Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem;
