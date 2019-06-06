import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Projects from './components/Projects';
// import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Projects />
      {/* <Card /> */}
    </div>
  );
}

export default App;
