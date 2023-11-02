import React, { useEffect, useState } from "react";

export const useScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isFetching
      ) {
        return;
      }
      setIsFetching(true);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;

    callback();

    setIsFetching(false);
  }, [callback, isFetching]);

  return { isFetching, setIsFetching };
};
