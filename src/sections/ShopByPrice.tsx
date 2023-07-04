import React from "react";
import styles from "@/styles/shopByPrice.module.css";
import Image from "next/image";

const ShopByPrice = () => {
  return (
    <section className={styles.sec}>
      <div className={styles.cont}>
        <div className={styles.title}>Shop By Price</div>
        <div className={styles.imgCont}>
          <div className={styles.group}>
            <div className={styles.layer} />
            <Image
              width={200}
              height={200}
              className={styles.img}
              src="/images/background/bg-hero-section.jpg"
              alt="under 1Lakh"
            />
            <div className={styles.textCont}>
              <p>Under</p>
              <p>1 Lakh</p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.layer} />
            <Image
              width={200}
              height={200}
              className={styles.img}
              src="/images/background/bg-hero-section.jpg"
              alt="under 1Lakh"
            />
            <div className={styles.textCont}>
              <p>Under</p>
              <p>2 Lakh</p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.layer} />
            <Image
              width={200}
              height={200}
              className={styles.img}
              src="/images/background/bg-hero-section.jpg"
              alt="under 1Lakh"
            />
            <div className={styles.textCont}>
              <p>Under</p>
              <p>3 Lakh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByPrice;
