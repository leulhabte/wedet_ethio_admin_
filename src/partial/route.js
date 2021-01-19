import React from 'react';
import { Redirect } from 'react-router-dom';

const Routing = ({ history }) => {
    return (
        <Redirect to={{ pathname: `/${history.location.state.path}`, state: {data: history.location.state.data}}} />
    )

}

export default Routing;