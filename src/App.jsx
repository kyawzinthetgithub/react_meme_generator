// import Header from "./components/Header";
// import Main from "./components/Main";

import { useState } from "react";
import WindowTracker from "./components/WindowTracker";

export default function App() {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow((prevSho) => (prevSho = !prevSho));
  };
  return (
    <>
      <main className="container">
        <button onClick={toggleShow}>toggle WindowTracker</button>
        {show && <WindowTracker />}
      </main>
    </>
  );
}
