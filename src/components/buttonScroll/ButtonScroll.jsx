import "./buttonScroll.css";
import { FaArrowUp } from "react-icons/fa";

export const ButtonScroll = () => {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scroll-top" onClick={goTop}>
      <FaArrowUp className="arrow-icon" />
    </div>
  );
};
