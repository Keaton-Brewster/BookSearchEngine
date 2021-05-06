import { useContext, useEffect } from "react";
import { StoreContext } from "./GlobalContext";
import API from "./API";

const useGetBooks = () => {
  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    const savedBooks = API.getBooks();
    dispatch({ action: "set saved books", payload: savedBooks });
  }, [store.update]);
};

export default useGetBooks;
