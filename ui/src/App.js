import React, { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function App () {
  const [width, height] = useWindowSize();
  return <iframe width="100%" height={height} src="https://drive.google.com/file/d/1nbOVZyS6nh_BH_Cr2e_gKmkv2e62OvO4/preview?usp=share_link" title="W3Schools Free Online Web Tutorials"></iframe>
}

export default App