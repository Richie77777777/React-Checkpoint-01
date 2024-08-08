// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Card } from 'react-bootstrap';

const App = () => {
  const firstName = "IBABS!!!!!!"; // Change this to your first name

  return (
    <div className="App" style={{ padding: '20px' }}>
      <Card style={{ width: '18rem', margin: 'auto', textAlign: 'center' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && (
          <img
            src="https://avatars.githubusercontent.com/u/66238422?v=4"
            alt="Hello"
            style={{ marginTop: '10px' }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
