import Navbar from "../../components/navbar/Navbar";
import { NewsCard } from "../../components/newsCard/NewsCard";
import { warnings } from "../../cusHook/warning";
import "./home.css";
export const Home = () => {
  // Custom hook for page refresh warning.
  warnings("Are you sure you want to leave this page?");

  return (
    <>
      <Navbar />
      <NewsCard />
    </>
  );
};
