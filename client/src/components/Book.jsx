import React from "react";
import { Container, Content, Sidebar } from "rsuite";

const Book = ({ imgLink, authors, categories }) => {
  return (
    <Container>
      <Sidebar>
        <img src={imgLink} alt="" />
      </Sidebar>
      <Content>Author: {authors}</Content>
      <Content>Categories: {categories}</Content>
    </Container>
  );
};

export default Book;
