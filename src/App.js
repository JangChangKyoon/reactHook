import "./styles.css";
import React, { useEffect, useState } from "react";
import useInput from "./hook/useInput";
import { useTabs, content } from "./hook/useTabs";

export default function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  // useInput
  const maxLen = (value) => value.length < 10; //&& !value.include("@");
  const name = useInput("Mr.", maxLen);
  const email = useInput("@");

  // useTabs
  const { currentItem, changeItem } = useTabs(0, content);

  //useEffect
  useEffect(() => {
    console.log("hi");
  });
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>

      {/* useInput */}
      {/* {...name} : value={name.value} onChange={name.onChange*/}
      <input placeholder="Name" {...name} />
      <input {...email} />

      {/* useTab */}
      <div className="App">
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
