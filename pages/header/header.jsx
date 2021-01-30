import React from 'react';
import { Fragment } from 'react';
import Layout from '../../components/layout/layout';
import './style.css';


function header() {
    return (
        <Layout>
            <section>
            <nav class="navbar navbar-light bg-light">
                 <a class="navbar-brand" href="http://ola.com">Navbar</a>
            </nav>
            </section>
        </Layout>
    )
}

export default header
