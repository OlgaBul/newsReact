import NewsFilters from "@/pages/main/ui/NewsFilters/NewsFilters";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { UseDebounce } from "@/shared/hooks/UseDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { Pagination } from "@/features/pagination";
import { NewsList } from "@/wigets/news/ui";
import { setFilters } from "@/entities/news/model/newsSlice";



const NewsByFilters = () => {;
  const dispatch = useAppDispatch()

  const filters = useAppSelector(state => state.news.filters)
  const news = useAppSelector(state => state.news.news)

  const debouncedKeywords = UseDebounce(filters.keywords, 1500);
  const { isLoading } = useGetNewsQuery({...filters, keywords: debouncedKeywords})

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({key: "page_number", value: filters.page_number + 1}))
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({key: "page_number", value: filters.page_number - 1}))
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({key: "page_number", value: pageNumber}))
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters}/>

      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>

    </section>
  );
};

export default NewsByFilters;
