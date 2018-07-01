import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import MealBuilder from './containers/MealBuilder/MealBuilder';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <MealBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
