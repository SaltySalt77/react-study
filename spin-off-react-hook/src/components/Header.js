import { useContext } from "react";
import styles from "../App.module.css";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome!</h1>
    </header>
  );
};

export default Header;
