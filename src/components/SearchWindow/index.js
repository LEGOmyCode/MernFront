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
          <Form.Control
            placeholder="Search"
            aria-label="Search For Vacations"
            aria-describedby="travel-search-button"
          />
          <Button variant="danger" id="travel-search">
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default SearchWindow;
