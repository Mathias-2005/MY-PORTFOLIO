import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// RAMENE LE CLIENT EN HAUT DE LA PAGE AU CLICK DE PROJETS
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;