import React, { Component } from 'react';
import {BaseLayout} from './components/BaseLayout'
import {OmdbAPI} from './components/OmdbAPI'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <OmdbAPI/>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
