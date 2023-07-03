"use client";
import Link from "next/link";
import React, { useState } from "react";

import styles from "./Navbar.module.css";

import { navigationLinks } from "../../utils/data";
import { useRouter } from "next/router";

type NavigationProps = {
  label: string;
  path: string;
  isDropdown?: boolean;
  dropDownItems?: {
    label: string;
    path: string;
  }[];
};

const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useRouter();
  return (
    <ul className={styles.container}>
      {navigationLinks.map((link: NavigationProps) => {
        if (link.isDropdown) {
          return (
            <li
              onMouseOut={() => setDropdown(!dropdown)}
              className={styles.linkItem}
              key={link.label}
            >
              <Link href={link.path}>{link.label}</Link>
              <ul
                style={{
                  display: dropdown ? "block" : "none",
                  listStyle: "none",
                }}
              >
                {link.dropDownItems?.map((item) => (
                  <li className={styles.linkItem} key={item.label}>
                    <Link href={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }
        return (
          <li className={styles.linkItem} key={link.label}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
