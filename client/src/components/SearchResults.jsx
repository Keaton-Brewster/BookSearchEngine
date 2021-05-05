import { Container, Content, PanelGroup, Panel } from "rsuite";
import Book from "./Book";

import React from "react";

const SearchResults = ({ books }) => {
  return (
    <Container>
      <Content>
        <PanelGroup accordian defaultActiveKey={0}>
          {books ? (
            books.map((book, i) => {
              const {
                title,
                authors,
                categories,
                imageLinks,
              } = book.volumeInfo;
              return (
                <Panel eventKey={i} key={i} header={<h3>{title}</h3>}>
                  <Book
                    imgLink={imageLinks?.smallThumbnail}
                    authors={authors}
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
  );
};

export default SearchResults;
