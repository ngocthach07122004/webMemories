import React, { useEffect, useState } from "react";
import "./countdown.css"; 
export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderBox = (value, label) => (
    <div className="time-box">
      <span className="number">{value.toString().padStart(2, "0")}</span>
      <p className="label">{label}</p>
    </div>
  );

  return (
    <div className="countdown">
      {renderBox(timeLeft.days, "Ngày")}
      {renderBox(timeLeft.hours, "Giờ")}
      {renderBox(timeLeft.minutes, "Phút")}
      {renderBox(timeLeft.seconds, "Giây")}
    </div>
  );
}