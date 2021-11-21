//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Resume from './components/Resume';

function App() {
  const [categories] = useState(['about', 'contact', 'work', 'resume']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    switch(currentCategory) {
      case 'about': return <About/>;
      case 'contact': return <Contact/>;
      case 'work': return <Work/>;
      case 'resume': return <Resume/>;
      default: return <About/>;
    }
  };

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
