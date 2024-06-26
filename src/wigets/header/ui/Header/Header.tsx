import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeProvider";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton";
import { formatDate } from "@/shared/helpers/formatDate";


const Header = () => {
  const { isDark } = useTheme()
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS</h1>
        <p className={styles.data}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton/>
    </header>
  );
};

export default Header;
