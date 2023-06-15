import React from "react";
import { BiChevronDown } from "react-icons/bi";
import styles from "./topNavbar.module.css";
import Link from "next/link";
const TopNavbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.NavUl}>
        <li className={styles.buyButton}>
          Buy <BiChevronDown />
          <div className={styles.buyDropDownMain}>
            <div className={styles.buyDropDownCont}>
              <ul className={styles.buyDropDownUl}>
                <li className={styles.buyDropDownLi}>How to buy </li>
                <li className={styles.buyDropDownLi}>Shop</li>
                <li className={styles.buyDropDownLi}>Finance</li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.sellButton}>
          Sell <BiChevronDown />
          <div className={styles.sellDropDownMain}>
            <div className={styles.sellDropDownCont}>
              <ul className={styles.sellDropDownUl}>
                <li className={styles.sellDropDownLi}>How to sell? </li>
                <li className={styles.sellDropDownLi}>Shop</li>
                <li className={styles.sellDropDownLi}>Finance</li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.aboutButton}>
          About <BiChevronDown />
          <div className={styles.aboutDropDownMain}>
            <div className={styles.aboutDropDownCont}>
              <ul className={styles.aboutDropDownUl}>
                <li className={styles.aboutDropDownLi}>About Us</li>
                <li className={styles.aboutDropDownLi}>Meet out Team</li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.contactButton}><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
