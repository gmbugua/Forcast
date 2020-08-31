import React from "react";
import styles from "./Wrapper.module.scss";

function Wrapper(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default Wrapper;
