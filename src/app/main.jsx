import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/styles/globals.scss';
import About from '../components/About';
import Header from '../components/Header';
import Tools from '../components/Tools';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex flex-col 2xl:mt-[80px] 2xl:mx-[183px] gap-[128px] msm:mt-[45px] msm:mx-[30px]">
    <Header />
    <About />
    <Tools />
    </div>
  </React.StrictMode>,
)
