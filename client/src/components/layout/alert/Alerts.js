import React, { useContext } from 'react';
import AlertContext from '../../../context/alert/alertContext';

const Alerts = () => {
    const alertContext = useContext(AlertContext);

    return (
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
            <div key={alert.id} className="uk-alert uk-alert-danger uk-margin-small-top">
                <p><span uk-icon="icon: info"></span> {alert.msg}</p>
            </div>
        ))
    )
}

export default Alerts;
