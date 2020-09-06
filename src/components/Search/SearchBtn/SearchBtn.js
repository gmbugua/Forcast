import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Link } from "react-router-dom";

import Button from "../../Button/";

import styles from "./SearchBtn.module.scss";

const SearchBtn = (props) => {
  return (
    <Link className={cx("link", styles.link_spacing)} to={props.route}>
      <Button type="search" label="search" />
    </Link>
  );
};

SearchBtn.propTypes = {
  route: PropTypes.string.isRequired,
};

SearchBtn.defaultProps = {
  route: "/",
};

export default SearchBtn;
