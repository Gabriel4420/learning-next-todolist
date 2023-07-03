import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Layout.module.css";
import { FC } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <main>{children}</main>
      <footer className={styles.footer}>Todos os direitos reservados</footer>
    </div>
  );
};

export default Layout;
