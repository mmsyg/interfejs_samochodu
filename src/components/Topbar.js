import React, { useEffect, useState } from "react";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function getTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

const Topbar = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentTime, setCurrentTime] = useState(getTime(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(getTime(now));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="top_bar">
      <p className="date">{currentDate}</p>
      <p className="time">{currentTime}</p>
    </div>
  );
};

export default Topbar;
