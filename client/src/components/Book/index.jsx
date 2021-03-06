import React from "react";
import { Container, Content, Sidebar, Footer } from "rsuite";
import "./book.css";

const Book = ({ imgLink, authors, categories, description }) => {
  return (
    <Container>
      <Sidebar className="sidebar">
        <img src={imgLink} alt="" />
      </Sidebar>
      <Container>
        <Content>
          Author: <strong>{authors}</strong>
        </Content>
        <Content>
          Categories: <strong>{categories}</strong>
        </Content>
        <Footer>
          Description <strong>{description}</strong>
        </Footer>
      </Container>
    </Container>
  );
};

export default Book;
