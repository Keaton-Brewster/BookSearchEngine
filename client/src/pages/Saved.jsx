import React, { useContext } from "react";
import { StoreContext } from "../utils/GlobalContext";
import { Container, Content, PanelGroup, Panel, Alert } from "rsuite";
import DeleteButton from "../components/DeleteBtn";
import Book from "../components/Book";
import { Row, Col } from "../components/Grid";
import API from "../utils/API";

const Saved = () => {
  const [store, dispatch] = useContext(StoreContext);
  const books = store.savedBooks;

  function deleteBook(_id) {
    API.deleteBook(_id).then(() => {
      dispatch({ type: "update saved books" });
      Alert.error("Deleted");
    });
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col size="md-2" />
        <Col size="md-8">
          <h1>Saved</h1>
          <Container>
            {books.length > 0 ? (
              <Content>
                <PanelGroup accordian bordered>
                  {books.map((book, i) => {
                    const {
                      title,
                      authors,
                      description,
                      categories,
                      imageLinks,
                      link,
                    } = book;
                    return (
                      <Panel
                        key={i}
                        header={
                          <>
                            <h3
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              <a href={link} target="blank">
                                {title}
                              </a>
                            </h3>
                            <DeleteButton
                              handleBookDelete={(event) => {
                                event.preventDefault();
                                deleteBook(book._id);
                              }}
                            />
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
                  })}
                </PanelGroup>
              </Content>
            ) : (
              <Container>Start by saving from your search results</Container>
            )}
          </Container>
        </Col>
        <Col size="md-2" />
      </Row>
    </Container>
  );
};

export default Saved;
