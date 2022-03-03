import React from "react";
import { LoaderStyle } from "../../style-components/LoaderStyle";

const Loader = () => {
  return (
    <>
      <LoaderStyle>
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoaderStyle>
    </>
  );
};

export default Loader;
