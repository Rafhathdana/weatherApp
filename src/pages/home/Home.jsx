import { Filter } from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import { NewsCard } from "../../components/newsCard/NewsCard";
import { Search } from "../../components/search/Search";
import "./home.css";
export const Home = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Filter />
      <NewsCard />
    </>
  );
};
