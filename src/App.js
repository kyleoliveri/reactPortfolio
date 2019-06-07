import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Projects from './components/Projects';
import portfolio from './portfolio.json';

class App extends Component {

  state = {
    portfolio
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
          {this.state.portfolio.map(project => (
            <Projects
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
            />
          ))}
      </div>
    );
  }
}

export default App;
