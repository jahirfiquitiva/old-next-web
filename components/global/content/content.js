import styles from './content.module.css';
import Footer from '@components/global/footer/footer';

const Content = ({ children }) => {
  return (
    <main role={'main'} className={styles.main}>
      <div className={styles.content}>{children}</div>
      <Footer/>
    </main>
  );
};

export default Content;
