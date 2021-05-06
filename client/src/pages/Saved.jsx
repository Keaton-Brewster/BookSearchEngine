import React, { useEffect, useState } from "react";
import { Container, Content, PanelGroup, Panel } from "rsuite";
import Book from "../components/Book";
import { Row, Col } from "../components/Grid";
import API from "../utils/API";

const Saved = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getBooks().then((books) => {
      console.log(books);
      setBooks(books);
    });
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col size="md-2" />
        <Col size="md-8">
          <h1>Saved</h1>
          <Container>
            <Content>
              <PanelGroup accordian defaultActiveKey={0} bordered>
                {books.length > 0 ? (
                  books.map((book, i) => {
                    const {
                      title,
                      authors,
                      description,
                      categories,
                      imageLinks,
                    } = book;
                    return (
                      <Panel
                        eventKey={i}
                        key={i}
                        header={
                          <>
                            <h3
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {title}
                            </h3>
                          </>
                        }
                      >
                        <Book
                          imgLink={imageLinks?.smallThumbnail}
                          authors={authors}
                          description={description}
                          categories={categories}
                        />
                      </Panel>
                    );
                  })
                ) : (
                  <p>No results</p>
                )}
              </PanelGroup>
            </Content>
          </Container>
        </Col>
        <Col size="md-2" />
      </Row>
    </Container>
  );
};

export default Saved;
