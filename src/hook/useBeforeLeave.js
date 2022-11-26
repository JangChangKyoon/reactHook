import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    // console.log(event);
    // onBefore();
    // console.log("leaving");
    const { clientY } = event;
    if (clientY <= 50) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouselevae", handle);
  }, []);
};
