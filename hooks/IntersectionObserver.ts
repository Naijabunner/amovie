import { useEffect, useState } from 'react';

const useIntersectionObserver = (setVisible:(arg:boolean)=>void) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [element]);

  return [setElement];
};

export default useIntersectionObserver;
