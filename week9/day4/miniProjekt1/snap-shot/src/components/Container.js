import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../images/photo";
import Gallery from "./Gallary";

const Container = ({ searchTerm }) => {
  const { images, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="container">
      {<Gallery data={images} />}
    </div>
  );
};

export default Container;