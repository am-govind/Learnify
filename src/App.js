import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { useRef } from "react";
function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black px-3 py-5">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
