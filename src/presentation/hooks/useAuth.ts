import { useEffect, useState } from 'react';

function WindowDimensions(): { width: number; height: number } {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useDimensions(): { width: number; height: number } {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>(WindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(WindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  return windowDimensions;
}
