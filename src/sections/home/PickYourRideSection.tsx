"use client";
import React from "react";
import styles from "./styles/pickYourRideSection.module.css";
import Image from "next/image";

const PickYourRideSection = () => {
  return (
    <section>
      <div>
        <div>
          <p>Pick your Ride</p>
        </div>
        <div>
          <div>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Image
                  width={200}
                  height={200}
                  className={styles.logo}
                  src="/logos/yamaha.png"
                  alt="img"
                />
              </li>
              <li className={styles.li}>
                <Image
                  width={200}
                  height={200}
                  className={styles.logo}
                  src="/logos/honda.png"
                  alt="img"
                />
              </li>
              <li className={styles.li}>
                <Image
                  width={200}
                  height={200}
                  className={styles.logo}
                  src="/logos/ktm.png"
                  alt="img"
                />
              </li>
              <li className={styles.li}>
                <Image
                  width={200}
                  height={200}
                  className={styles.logo}
                  src="/logos/royalenfield.png"
                  alt="img"
                />
              </li>
              <li className={styles.li}>
                <Image
                  width={200}
                  height={200}
                  className={styles.logo}
                  src="/logos/suzuki.png"
                  alt="img"
                />
              </li>
              <li className={styles.li}>
                <Image
                  width={200}
                  height={200}
                  className={styles.logo}
                  src="/logos/aprilia.png"
                  alt="img"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickYourRideSection;
