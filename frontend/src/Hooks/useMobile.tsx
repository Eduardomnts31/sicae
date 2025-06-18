import { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;

      setIsMobile(newWindowWidth < 950);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile };
}

export default useMobile;
