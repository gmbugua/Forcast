import React from "react";
import PropType from "prop-types";
import { useWindowSize } from "../../utility/Hooks";
import Loader from "react-loader-spinner";

import styles from "./Load.module.scss";

const Load = (props) => {
  const { width, height } = useWindowSize();
  let { w, h } = props;
  h = width > 542 ? props.height : (props.width * (542 - props.width)) / 542;
  return (
    <div className={styles.content_wrapper}>
      <Loader
        className={styles.container}
        type="Circles"
        color="#0f8b8d"
        height={h}
        width={props.width}
        visible={true}
      />
      <Loader
        className={styles.container}
        type="Rings"
        color="#0f8b8d"
        height={h}
        width={props.width}
        visible={true}
      />
      <Loader
        className={styles.container}
        type="Hearts"
        color="#0f8b8d"
        height={h}
        width={props.width}
        visible={true}
      />
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
