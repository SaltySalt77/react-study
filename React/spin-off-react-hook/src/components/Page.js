import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import styles from "../App.module.css";

const Page = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
