import React, { useState, useEffect } from "react";
import {} from "rsuite";
import SearchResults from "../components/SearchResults";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
import axios from "axios";

function Books() {
  // Initialize books as an empty array
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) return;

    setTimeout(() => {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then((res) => {
          res ? setBooks(res.data.items) : setBooks([]);
        })
        .catch((e) => {
          setBooks([]);
          console.warn(e);
        });
    }, 1000);

    return () => {
      setBooks([]);
    };
  }, [search]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col size="md-2" />
        <Col size="md-8">
          <h1>Search!</h1>
          <form onSubmit={(event) => event.preventDefault()}>
            <Input
              type="text"
              name="search"
              onChange={handleInputChange}
              placeholder="Search for books!"
            />
          </form>
          <SearchResults books={books} />
        </Col>
        <Col size="md-2" />
      </Row>
    </Container>
  );
}

export default Books;
