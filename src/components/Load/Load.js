import React from "react";
import PropType from "prop-types";
import { useWindowSize } from "../../utility/Hooks";
import Icon from "../Icon/Icon.js";
import Loader from "react-loader-spinner";
import styles from "./Load.module.scss";

const Load = (props) => {
  const { width } = useWindowSize();
  let height =
    width > 542
      ? props.height
      : (props.width * (542 - props.width)) / props.width;
  return (
    <div className={styles.content_wrapper}>
      <Loader
        type="Bars"
        color="#ec9a29"
        height={height}
        width={props.width}
        visible={true}
        className={styles.loader}
      />
      <Icon className={styles.logo} name="Logo" size="5em" />
    </div>
  );
};

Load.propTypes = {
  height: PropType.number.isRequired,
  width: PropType.number.isRequired,
};

Load.defaultProps = {
  height: 400,
  width: 400,
};

export default Load;
