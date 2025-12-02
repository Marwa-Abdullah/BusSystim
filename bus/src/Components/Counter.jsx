import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <div ref={ref}>
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
        {count === end ? end : count}+
      </h3>
      <p className="text-base md:text-lg mt-2">{label}</p>
    </div>
  );
};

export default Counter;