import React from 'react';
import Layout from '.';

const PrivateRoute = ({ element, ...rest }) => {
    return <Layout {...rest}>
        {element}
    </Layout>
};

export default PrivateRoute


