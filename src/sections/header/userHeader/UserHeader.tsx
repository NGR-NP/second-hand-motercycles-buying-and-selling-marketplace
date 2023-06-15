import AppLogo from "@/components/logo/AppLogo";
import React from "react";
import { MdPhone, MdPhoneIphone } from "react-icons/md";
import styles from "./userHeader.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import TopNavbar from "@/sections/navbar/TopNavbar";
const UserHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <div className={styles.navContainer}>
          <div className={styles.navLinksList}>
            <TopNavbar />
          </div>
          <div className={styles.handburgerMenuButton}>handburger menu</div>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <AppLogo />
          </div>
          <div className={styles.powredByText}>
            Powered By Hunchha Digital Agency
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactGroup}>
            <div className={styles.phoneNumber}>
              <MdPhone />
              <p>+977 9812345678</p>
            </div>
            <div className={styles.socialMediaLink}>
              <FiFacebook />
              <AiOutlineInstagram />
              <MdPhoneIphone />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
