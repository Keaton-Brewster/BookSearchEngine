import { Container, Content, PanelGroup, Panel } from "rsuite";
import Book from "./Book";
import SaveButton from "./SaveButton";
import API from "../utils/API";

import React from "react";

const SearchResults = ({ books }) => {
  function handleBookSave(book) {
    const bookData = {
      title: book?.volumeInfo?.title,
      author: book?.volumeInfo?.authors[0],
      synopsis: book?.volumeInfo?.description,
    };

    console.log(bookData);

    API.saveBook(bookData).catch((error) => {
      console.error(`error api.save book ${error}`);
    });
  }

  return (
    <Container>
      <Content>
        <PanelGroup accordian="true" defaultActiveKey={0} bordered>
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
