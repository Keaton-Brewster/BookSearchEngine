import { useContext } from "react";
import { StoreContext } from "../utils/GlobalContext";
import { Container, Content, PanelGroup, Panel, Alert } from "rsuite";
import Book from "./Book";
import SaveButton from "./SaveButton";
import API from "../utils/API";

import React from "react";

const SearchResults = ({ books }) => {
  const [store, dispatch] = useContext(StoreContext);

  function handleBookSave(book) {
    const bookData = {
      title: book?.volumeInfo?.title,
      authors: book?.volumeInfo?.authors,
      description: book?.volumeInfo?.description,
      imageLinks: book?.volumeInfo?.imageLinks,
      categories: book?.volumeInfo?.categories,
    };

    API.saveBook(bookData)
      .then(() => {
        dispatch({ type: "update saved books" });
        Alert.success("Saved!");
      })
      .catch((error) => {
        Alert.error("Oops. something went wrong...");
        console.error(`error api.save book ${error}`);
      });
  }

  return (
    <Container>
      <Content>
        <PanelGroup accordian defaultActiveKey={0} bordered>
          {books.map((book, i) => {
            const {
              title,
              authors,
              description,
              categories,
              imageLinks,
            } = book.volumeInfo;
            return (
              <Panel
                eventKey={i}
                key={i}
                header={
                  <>
                    <h3
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      {title}
                    </h3>
                    <SaveButton
                      handleBookSave={(event) => {
                        event.preventDefault();
                        handleBookSave(book);
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
    </Container>
  );
};

export default SearchResults;
