import Footer from '@components/global/footer/footer';
import styles from './content.module.css';

const Content = ({ children }) => {
  return (
    <main role={'main'} className={styles.main}>
      <div className={styles.content}>{children}</div>
      <Footer/>
    </main>
  );
};

export default Content;
