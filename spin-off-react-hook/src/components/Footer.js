import styles from "../App.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <footer
      className={styles.footer}
      style={{ backgroundColor: isDark ? "black" : "lightgray" }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
