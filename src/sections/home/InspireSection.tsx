import React from "react";
import styles from "./styles/inspireSection.module.css";
const InspireSection = () => {
  return (
    <section className={styles.sec}>
      <div className={styles.cont}>
        <div className={styles.titleCont}>
          <p>Lorem ipsum dolor </p>
        </div>
        <div className={styles.descCont}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur eos nesciunt aspernatur illo ut sed, amet consequuntur
            repudiandae impedit ratione aut animi, ducimus, cum quia asperiores
            ab aliquid recusandae saepe?
          </p>
        </div>
        <div className={styles.button}><p>Button</p></div>
      </div>
    </section>
  );
};

export default InspireSection;
