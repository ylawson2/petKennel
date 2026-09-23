import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    
    // TODO: Initialize state here
    this.state = {
      characters: initialData
    };
  }

  // Method to handle state changes from children
  handleUpdate = (id) => {
   
  const updatedCharacters = this.state.characters.map(char => {
    if (char.id === id) {
      return {
        ...char,
        currentImageIndex: (char.currentImageIndex + 1) % char.images.length
      };
    }
    return char;
  });

  this.setState({ characters: updatedCharacters });


  }

  //WORK IN PROGRESS - Adopt feature (in class asignment)
  //
  //DONE:
  //Added a third pet in data.js; it renders automatically 
  //Still to do: 
  //- Pass handleAdopt down to each card as a prop (onAdopt) inside the.map().

  handleAdopt = (id) => {
    const remainingCharacters = this.state.characters.filter(char => char.id !== id);
    this.setState({ characters: remainingCharacters });
  }

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Parent Component (Class-Based)</h1>
        
        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {/* TODO: Map through your state characters here and render ChildComponents */}
           
              {this.state && this.state.characters.map(char => (
                <ChildComponent 
                  key={char.id}
                  id={char.id}
                  name={char.name}
                  image={char.images[char.currentImageIndex]}

                  status={char.status}
                  onAction={this.handleUpdate}
                />
              ))} 
          
        </div>
      </div>
    );
  }
}

export default App;
