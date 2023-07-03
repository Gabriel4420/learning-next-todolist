import React from "react";
import styles from "./Header.module.css";
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Meu proprio projeto</h1>
    </header>
  );
};

export default Header;
