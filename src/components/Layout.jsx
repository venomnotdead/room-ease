import React from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/layout.module.css";
import UserProfile from "./UserProfile";

const Layout = ({ children }) => {
  return (
    <div  className="bg-primary-default text-primary-lightest">
      <UserProfile />
      <div className={styles.layout}>{children}</div>
      <Navbar />
    </div>
  );
};

export default Layout;
