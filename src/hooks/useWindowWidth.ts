import { useState, useLayoutEffect } from "react";

export const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
};
