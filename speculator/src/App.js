import React from 'react';
import './scss/main.scss';
import { Component } from 'react';
// import { render } from 'node-sass';
import ReactBootstrap from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class App extends Component{

  render() {
    return (
      <div className="App">
        <h1>Speculator</h1>

        <h3>demystify what moves the world</h3>

        <Card bg="primary" text="white" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
}
  
export default App;
