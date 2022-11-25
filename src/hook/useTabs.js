import { useState } from "react";

export const content = [
  {
    tab: "Section 1",
    content: "1",
  },
  { tab: "Section 2", content: "2" },
];

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
