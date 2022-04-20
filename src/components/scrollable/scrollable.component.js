import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getImages } from "../../features/gallery/gallery-slice";

import "./scrollable.styles.scss";

const Scrollable = ({ children }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const onScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        dispatch(getImages(9));
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
