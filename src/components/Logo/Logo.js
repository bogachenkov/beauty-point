import React from 'react';
import './style.scss';

const Logo = () => {
  return (
    <a href="#root" className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><linearGradient id="8rnoa" x1="32" x2="5.27" y1="0" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#a078ff"/><stop offset="1" stopColor="#8d43ff"/></linearGradient><mask id="8rnoc" width="2" height="2" x="-1" y="-1"><path fill="#fff" d="M9 9h14v14H9z"/><path d="M16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/></mask><filter id="8rnob" width="46" height="48" x="-7" y="-7" filterUnits="userSpaceOnUse"><feOffset dy="2" in="SourceGraphic" result="FeOffset1033Out"/><feGaussianBlur in="FeOffset1033Out" result="FeGaussianBlur1034Out" stdDeviation="2.4 2.4"/></filter></defs><g><g><g><path fill="url(#8rnoa)" d="M0 9a9 9 0 0 1 9-9h14a9 9 0 0 1 9 9v14a9 9 0 0 1-9 9H9a9 9 0 0 1-9-9z"/></g><g><g filter="url(#8rnob)"><path fill="none" d="M16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" mask="url(&quot;#8rnoc&quot;)"/><path fillOpacity=".52" d="M16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/></g><path fill="#fff" d="M16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/></g></g></g></svg>
      Beauty Point
    </a>
  );
};

export default Logo;