import { useState } from "react";

export const content = [
  {
    tab: "useTabs 1",
    content: "useTabs content 1",
  },
  { tab: "useTabs 2", content: "useTabs content 2" },
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
