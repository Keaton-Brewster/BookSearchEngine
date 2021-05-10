import { useContext } from "react";
import { Container, Content, PanelGroup, Panel, Alert } from "rsuite";
import { StoreContext } from "../utils/GlobalContext";
import Book from "./Book";
import SaveButton from "./SaveButton";
import API from "../utils/API";

const SearchResults = ({ socket, books }) => {
  const [store, dispatch] = useContext(StoreContext);

  function handleBookSave(book) {
    const bookData = {
      title: book?.volumeInfo?.title,
      authors: book?.volumeInfo?.authors,
      description: book?.volumeInfo?.description,
      imageLinks: book?.volumeInfo?.imageLinks,
      categories: book?.volumeInfo?.categories,
      link: book?.volumeInfo?.infoLink,
    };

    API.saveBook(bookData)
      .then(() => {
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
        <PanelGroup bordered>
          {books.map((book, i) => {
            const {
              title,
              authors,
              description,
              categories,
              imageLinks,
              infoLink,
            } = book.volumeInfo;
            return (
              <Panel
                key={i}
                header={
                  <>
                    <h3
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      <a href={infoLink} target="blank">
                        {title}
                      </a>
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
