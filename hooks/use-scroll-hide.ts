import { useEffect, useState } from "react";

export const useScrollHide = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrolledUp(currentScrollPos < prevScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return {
    isScrolledUp,
  };
};
