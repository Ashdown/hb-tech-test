import React from 'react';
import ReactDOM from 'react-dom';
import 'fix-date';
import App from './App';

/**
 * This is the root of our application. Only the App component should be used here
 *
 * If you need to register globally available Providers please do so in /App/containers/App in the AppWithProviders component
 */
ReactDOM.render(<App />, document.getElementById('main'));
