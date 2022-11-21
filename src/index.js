import React from 'react';
import ReactDOM from 'react-dom/client';
import Articles from './Articles';

import Footer from './Footer';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

const profileInfos = {
  firstName : "David",
  lastName: "Robert",
  age: 32,
  job: "web dev",
  isActive: true
}



// Je passe en props à Article les données d'Articles
// je les affiche dans Article

const articlesData = [
  {
    title: 'Il pleut',
    image: 'https://cdn.sortiraparis.com/images/80/94880/783063-climat-l-eau-de-pluie-est-impropre-a-la-consommation-partout-sur-terre.jpg',
    content: 'blab blab jsuis trempé'
  },
  {
    title: 'Il pleut encore',
    image: 'https://cdn.sortiraparis.com/images/80/94880/783063-climat-l-eau-de-pluie-est-impropre-a-la-consommation-partout-sur-terre.jpg',
    content: 'blab blab jsuis trempé'
  },
  {
    title: 'Il pleutv toujours',
    image: 'https://cdn.sortiraparis.com/images/80/94880/783063-climat-l-eau-de-pluie-est-impropre-a-la-consommation-partout-sur-terre.jpg',
    content: 'blab blab jsuis trempé'
  },
  {
    title: 'J\'ai le cul trempé',
    image: 'https://cdn.sortiraparis.com/images/80/94880/783063-climat-l-eau-de-pluie-est-impropre-a-la-consommation-partout-sur-terre.jpg',
    content: 'blab blab jsuis trempé'
  }
];

root.render(
  <React.StrictMode>
      <Header />
        <Articles articles={articlesData} />
      <Footer />
  </React.StrictMode>
);

