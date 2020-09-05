import React from "react";
import Icon from "../../Icon/Icon";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <a href="/back.html" className={styles.backBtn}>
        <Icon className={styles.backIcon} name="chevron" size="1.5em" />
        <p>back</p>
      </a>
      <Icon className={styles.logo} name="Logo" size="5em" />
    </div>
  );
};

export default Nav;
