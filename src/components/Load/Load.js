import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Load.module.scss";

const Load = () => {
  return (
    <div className="wrapper">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={500}
        width={200}
        visible={true}
      />
    </div>
  );
};

export default Load;
