import React from "react";
import "./styles.css";
import { InputGroup, Form, Button } from "react-bootstrap";

function SearchWindow() {
  return (
    <div className="banner">
      <h1>Welcome</h1>
      <h3>Search your favorite meals</h3>
      <div className="meal-input">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search Meals"
            aria-label="Search For Meals"
            aria-describedby="meal-search-button"
          />
          <Button variant="danger" id="meal-search">
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default SearchWindow;
