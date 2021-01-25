import React from 'react';
import { Redirect } from 'react-router-dom';

const Routing = ({ history }) => {
    return (
        <Redirect to={{ pathname: `/${history.location.state.path}`, state: history.location.state.data ? {data: history.location.state.data}: null}} />
    )

}

export default Routing;