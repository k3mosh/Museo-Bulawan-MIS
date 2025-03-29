import { useEffect } from 'react'
import './index.css'

function App() {

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isOpera = userAgent.includes("OPR") || userAgent.includes("Opera");

    const isBrave = typeof navigator.brave !== 'undefined';

    if (isOpera) {
      document.documentElement.style.fontSize = "12px";
    } else if (isBrave) {
      document.documentElement.style.fontSize = "12px";
    } else {
      const isChromium = !!window.chrome || userAgent.includes("Chromium");
      if (isChromium) {
        document.documentElement.style.fontSize = "16px";
      }
    }
  }, []);

  return (
    <>

    </>
  )
}

export default App
