import React, { useRef } from "react";
import "./scrollable.styles.scss";

const Scrollable = ({ children }) => {
  const ref = useRef();
  const onScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        console.log("reach bottom");
      }
    }
  };
  return (
    <div className="scrollable" ref={ref} onScroll={onScroll}>
      {children}
    </div>
  );
};

export default Scrollable;
