import styles from "./styles.module.css";
import LatestNews from "../../Components/LatestNews/LatestNews";
import { useFetch } from "../../helpers/hocs/useFetch";
import { UseDebounce } from "../../helpers/hooks/UseDebounce";
import { getNews } from "../../api/apiNews";
import { PAGE_SIZE } from "../../constants/constants";
import { useFilters } from "../../helpers/hooks/useFilters";
import NewsByFilters from "../../Components/NewsByFilters/NewsByFilters";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });
  const debouncedKeywords = UseDebounce(filters.keywords, 1500);
  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFilters
        news={data?.news}
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
      />

    </main>
  );
};

export default Main;
