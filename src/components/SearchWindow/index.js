import React from "react";
import "./styles.css";
import { InputGroup, Form, Button } from "react-bootstrap";

function SearchWindow() {
  return (
    <div className="banner">
    <h1>Welcome</h1>
     <h3>Search your favorite Vacations</h3>
    <div className="vacay-input">
     <InputGroup className="mb-3">
    <Form>
      <Form.Group className="mb-3" controlId="countryName">
        <Form.Label>Country Name</Form.Label>
        <Form.Control type="country" placeholder="Enter Country" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cityName">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="password" placeholder="City" />
      </Form.Group>
     <Form.Group className="mb-3" controlId="photo">
        <Form.Label>Upload Pictures</Form.Label>
        <Form.Control type="photo" placeholder="Photos" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>    
    </Form>
    </InputGroup>
       </div>
    </div>
  );
}

export default SearchWindow;
