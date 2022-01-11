import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Clock.css";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "STA"];

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(
    // 이 함수는 현 컴포넌트가 mount 시에 호출됩니다.
    () => {
      const interval = setInterval(() => {
        console.log("time :", new Date());
        setDate(new Date());
      }, 1000);
      // 리턴된 함수는 현 컴포넌트 unmount 시에 호출됩니다.
      return () => {
        clearInterval(interval);
      };
    },
    []
  );
  return (
    <div className="clock-wrapper">
      <h2> 시계 </h2>
      <div className="clock">
        <p className="date">
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}{" "}
          {WEEKDAYS[date.getDay()]}
        </p>
        {/* <p className="time">{date.toLocaleTimeString('en-us')}</p> */}
        {/* <p className="time">{date.toISOString().slice(11, 19)}</p> */}
        <p className="time">
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </p>
        <p className="text">Powered by React.js</p>
      </div>
    </div>
  );
}

export default Clock;
