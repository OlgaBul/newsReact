// import NewsByFilters from "@/pages/main/ui/NewsByFilters/NewsByFilters";
import NewsByFilters from "./NewsByFilters/NewsByFilters";
import styles from './styles.module.css'
import LatestNews from "./LatestNews/LatestNews";



const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default MainPage;