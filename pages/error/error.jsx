import React from 'react';
import Layout from '../../components/layout/layout';

const ErrorPage = props => {
    return (
        <Layout>
            <section className="text-center p-5">
                <h1>404</h1>
                <h6>Page not found !</h6>
            </section>
        </Layout>
    )
}

export default ErrorPage;