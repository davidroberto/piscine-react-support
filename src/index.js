import React from 'react';
import ReactDOM from 'react-dom/client';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Header />
      <Main />
      <Footer />
  </React.StrictMode>
);

