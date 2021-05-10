import { useState, useEffect } from "react";
import { Container } from "rsuite";
import SearchResults from "../components/SearchResults";
import { Col, Row } from "../components/Grid";
import { Input } from "../components/Form";
import axios from "axios";

function Search({ socket }) {
  // Initialize books as an empty array
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) return;

    const timeout = setTimeout(() => {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then((res) => {
          res ? setBooks(res.data.items) : setBooks([]);
        })
        .catch((e) => {
          setBooks([]);
          console.warn(e);
        });
    }, 100);

    return () => clearTimeout(timeout);
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
          {search ? (
            <SearchResults socket={socket} books={books} />
          ) : (
            <Container>Type in the box to get started!</Container>
          )}
        </Col>
        <Col size="md-2" />
      </Row>
    </Container>
  );
}

export default Search;
