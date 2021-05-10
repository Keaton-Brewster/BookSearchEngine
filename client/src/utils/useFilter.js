import { useContext } from "react";
import { StoreContext } from "./GlobalContext";

const useFilter = (books) => {
  const [store, dispatch] = useContext(StoreContext);

  return books.filter((book) => {
    let saved = true;
    store.savedBooks.forEach((vol) => {
      if (book.id === vol.id) saved = false;
    });
    return saved;
  });
};

export default useFilter;
