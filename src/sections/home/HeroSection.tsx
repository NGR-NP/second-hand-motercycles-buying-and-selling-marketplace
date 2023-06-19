"use client";
import * as React from "react";
import styles from "./styles/heroSection.module.css";
export default function SimpleContainer() {
  return (
    <section className={styles.hero}>
      <div className={styles.layer}/>
      <div className={styles.content}>
        <small>Find Hidden Treasures</small>
        <h1 className={styles.title}>Buy and Sell <br/> with Ease</h1>
        <button className={styles.button} type="button">
          Start buying
        </button>
        <button className={styles.button} type="button">
          Sell Today
        </button>
      </div>
    </section>
  );
}
