import React from 'react';
import { Redirect } from 'react-router-dom';

const Routing = ({ history }) => {
    return (
        <Redirect to={{ pathname: "/photos", state: { photo: history.location.state.photo, data: history.location.state.data, index: history.location.state.index } }} />
    )

}

export default Routing;