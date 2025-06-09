import "./App.css";
import { useState } from "react";
import { PingComponent } from "./components/atoms/pingComponent";
import usePing from "./hooks/apis/queries/usePing";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}> Toogle</button>
      {isVisible && <PingComponent />}
    </>
  );
}

export default App;
