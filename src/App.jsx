import React, { useState, useEffect } from "react";
import Countdown from "./components/Countdown";
import Carousel from "./components/Carousel";
import Fireworks from "./components/Fireworks";
import ImageList from "./components/ImageComponent";
import Gallery from "./components/Gallery";
import "./App.css";

export default function App() {
  const targetDate = new Date("2025-08-31T07:00:00");
  const [isEventDay, setIsEventDay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now >= targetDate) {
        setIsEventDay(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="app">
      <header className="header">
        <div>
          {" "}
          <h2 className="header_title">
            🎉 Kỷ Niệm 20 Năm Ra Trường 🎉
          </h2>{" "}
        </div>
        {isEventDay && <Fireworks />}
        <Countdown targetDate={targetDate} />
        
      </header>
     <div className="wrapper_header_school" >
        <p className="header_school">
            TRƯỜNG THCS LÊ ĐÌNH CHINH Chào Mừng Cựu Học Sinh 20 Năm Ngày Trở Về
          </p>
     </div>
      <section className="banner">
        <h2>Kỷ Niệm 20 Năm Ra Trường</h2>
        <p>Niên Khóa 2001 - 2005</p>
        <div>
          Quảng Điền, <span class="banner_timeCountdown">ngày 31/08/2025</span>
        </div>
      </section>

      <section className="carousel-section">
        {/* <div className="wrapper_image">
          <h3 className="wrapper_image_title">Khoảnh khắc kỷ niệm</h3>
          <Carousel />
       </div> */}
      </section>

      <div className="wrapper_gallery">
        <Gallery images={ImageList} />
      </div>
    </div>
  );
}
