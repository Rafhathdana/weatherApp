import { Filter } from "../../components/filter/Filter";
import { NewsCard } from "../../components/newsCard/NewsCard";
import { Search } from "../../components/search/Search";

export const Home = () => {
  return (
    <>
      <Search />
      <Filter />
      <NewsCard />
    </>
  );
};
