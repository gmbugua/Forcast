import React from "react";
import Wrapper from "./Wrapper";
import styles from "./App.module.scss";

function App() {
  return (
    <Wrapper>
      {/* <p className="text--xxxl">
          <b>Hero Text</b>{" "}
        </p> */}
      <div className={styles.container}>
        <div>
          <h1>heading1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            quisquam quaerat nemo fugiat quam, commodi et voluptatum ut, velit
            suscipit labore? Accusamus, illo culpa? Consequatur temporibus illo
            laborum repellendus sint saepe ea sequi voluptates veniam veritatis
            officiis quaerat doloremque doloribus iure, nobis expedita inventore
            fuga nam corporis quidem vel! Magnam.
          </p>
        </div>
        <div>
          <h2>heading2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            quisquam quaerat nemo fugiat quam, commodi et voluptatum ut, velit
            suscipit labore? Accusamus, illo culpa? Consequatur temporibus illo
            laborum repellendus sint saepe ea sequi voluptates veniam veritatis
            officiis quaerat doloremque doloribus iure, nobis expedita inventore
            fuga nam corporis quidem vel! Magnam.
          </p>
        </div>
        <div>
          <h3>heading3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            quisquam quaerat nemo fugiat quam, commodi et voluptatum ut, velit
            suscipit labore? Accusamus, illo culpa? Consequatur temporibus illo
            laborum repellendus sint saepe ea sequi voluptates veniam veritatis
            officiis quaerat doloremque doloribus iure, nobis expedita inventore
            fuga nam corporis quidem vel! Magnam.
          </p>
        </div>
        <div>
          <h4>heading4</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            quisquam quaerat nemo fugiat quam, commodi et voluptatum ut, velit
            suscipit labore? Accusamus, illo culpa? Consequatur temporibus illo
            laborum repellendus sint saepe ea sequi voluptates veniam veritatis
            officiis quaerat doloremque doloribus iure, nobis expedita inventore
            fuga nam corporis quidem vel! Magnam.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
