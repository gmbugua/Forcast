import React from "react";
import Icon from "../../Icon/Icon";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link className="link" to="/search">
        <button className={styles.backBtn}>
          <Icon className={styles.backIcon} main="misc" name="chevron" />
          <p>back</p>
        </button>
      </Link>
      <Icon className={styles.logo} main="misc" name="logo" />
    </div>
  );
};

export default Nav;
