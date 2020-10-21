import React from "react";
import PropType from "prop-types";
import Icon from "../Icon/Icon.js";
import Loader from "react-loader-spinner";
import styles from "./Load.module.scss";

const Load = (props) => {
  return (
    <div className={styles.content_wrapper}>
      <Loader
        type="TailSpin"
        color="#ec9a29"
        height={props.height}
        width={props.width}
        visible={true}
        className={styles.loader}
      />
      <Icon className={styles.logo} main={"misc"} name="logo" size="5em" />
    </div>
  );
};

Load.propTypes = {
  height: PropType.number.isRequired,
  width: PropType.number.isRequired,
};

Load.defaultProps = {
  height: 200,
  width: 600,
};

export default Load;
