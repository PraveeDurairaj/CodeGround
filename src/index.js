import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import Homebanner from './components/HomeBanner/Homebanner';
// import Text from './text-size/text';
import Technology from './components/Technology/Technology';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Homebanner/>
  {/* <Text/> */}
  <Technology/>
  </div>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
   