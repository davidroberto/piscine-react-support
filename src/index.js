import React from 'react';
import ReactDOM from 'react-dom/client';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Profile from './Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));

const profileInfos = {
  firstName : "David",
  lastName: "Robert",
  age: 32,
  job: "web dev",
  isActive: true
}


root.render(
  <React.StrictMode>
      <Header />
      <Profile profileInfos={profileInfos}/>
      <Main />
      <Footer />
  </React.StrictMode>
);

