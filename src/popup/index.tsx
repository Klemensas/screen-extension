import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import { apolloClient } from '../apollo';
import Popup from './Popup';

chrome.tabs.query({ active: true, currentWindow: true }, () => {
  ReactDOM.render(
    <MemoryRouter>
      <ApolloProvider client={apolloClient}>
        <Popup />
      </ApolloProvider>
    </MemoryRouter>,
    document.getElementById('seenit-popup'),
  );
});
