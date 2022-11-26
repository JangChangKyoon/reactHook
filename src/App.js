import "./styles.css";
import React, { useEffect, useState, useRef } from "react";
import useInput from "./hook/useInput";
import { useTabs, content } from "./hook/useTabs";
import { useTitle } from "./hook/useTitle";
import { useClick } from "./hook/useClick";
import { useConfirm } from "./hook/useConfirm";
import { usePreventLeave } from "./hook/usePreventLeave";
import { useBeforeLeave } from "./hook/useBeforeLeave";
import { useFadeIn } from "./hook/useFadeIn";
import { useNetwork } from "./hook/useNetwork";
import { useScroll } from "./hook/useScroll";
import { useFullscreen } from "./hook/useFullscreen";
import { useNotification } from "./hook/useNotification";
import { useAxios } from "./hook/useAxios";

export default function App() {
  // ref : getElementById와 비슷
  const potato = useRef();
  // setTimeout(() => potato.current.focus(), 2);

  //useTitle
  const titleUpdater = useTitle("Loading you");
  setTimeout(() => titleUpdater("I love Home", 3000));

  //useState
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  // useInput
  const maxLen = (value) => value.length < 10; //&& !value.include("@");
  const name = useInput("useInput", maxLen);
  const email = useInput("@");

  // useTabs
  const { currentItem, changeItem } = useTabs(0, content);

  //useEffect
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const sayHello = () => {
    console.log("hi");
  };
  useEffect(sayHello, [number]); //[number] 변하면 sayHello 실행, []은 No matter anything, sayHello 실행

  //useClick
  const title = useClick(sayHello);

  //useConfirm
  const deleteWorld = () => {
    console.log("Del");
  };
  const confirmDelete = useConfirm("Are you sure?", deleteWorld);

  // usePreventleave
  const { enablePrevent, disablePrevent } = usePreventLeave();

  //useBeforeLeave
  const begForLife = () => console.log("beforeLeave");
  useBeforeLeave(begForLife);

  // useFadeIn
  const fadeInH1 = useFadeIn();

  //useNetwork
  const onLine = useNetwork();

  // useScroll
  const { y } = useScroll();

  // useFullscreen
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  // useNotification
  const triggerNotifi = useNotification("notification", {
    body: "notification body",
  });

  //useAxios
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  );
  // return---------------------------------
  return (
    <div className="App" style={{ height: "1000vh" }}>
      {/* ref : getElementbyId와 비슷한 역할*/}
      <input ref={potato} value="ref" />

      {/* useState */}
      <div>
        <span>useState {item}</span>
        <button onClick={incrementItem}>+</button>
        <button onClick={decrementItem}>-</button>
      </div>

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

      {/* useEffect */}
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>

      {/* useClick */}
      <h1 ref={title}>useClick : see console</h1>

      {/* useConfirm */}
      <button onClick={confirmDelete}>useConfirm</button>

      {/* preventLeave */}
      <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>

      {/* useFadeIn */}
      <h1 {...fadeInH1}>fadeIn</h1>

      {/* useNetwork */}
      <h1>{onLine ? "Network : Online" : "Network : Offline"}</h1>

      {/* useScroll */}
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        useScroll
      </h1>

      {/* useFullScreen */}
      <div ref={element}>
        <img src="https://images.chosun.com/resizer/FcuvdKYPdGn4oggyGAsOL_HfWqc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/C6ZYENIHEJGC3EN56T6HZQNPVQ.jpg" />
        <button onClick={exitFull}>exitScreen</button>
      </div>
      <button onClick={triggerFull}>fullScreen</button>

      {/* useNotification */}
      <div>
        <button onClick={triggerNotifi}>useNotification</button>
      </div>

      {/* useAxios */}
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : data.movies}</h2>
      <button onClick={refetch}>useAxios</button>
    </div>
  );
}
