import React from 'react';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-3">Home</h1>
              <p>
                Intro here
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
