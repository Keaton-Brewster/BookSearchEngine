import { useContext, useEffect } from "react";
import { StoreContext } from "./GlobalContext";
import API from "./API";

const useGetBooks = () => {
  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    API.getBooks().then((savedBooks) => {
      dispatch({ type: "set saved books", payload: savedBooks.data });
    });
  }, [store.update, dispatch]);
};

export default useGetBooks;
