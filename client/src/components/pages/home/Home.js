import React, { useContext, useEffect } from 'react';
import './Home.scss';
import Contacts from '../../contacts/Contacts';
import ContactForm from '../../contacts/ContactForm';
import ContactFilter from '../../contacts/ContactFilter';
import AuthContext from '../../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="uk-child-width-1-2@m home" data-uk-grid>
            <div>
                <div>
                    <ContactForm />
                </div>
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home;
