import Display from "./Display";
import Product from "./Product";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/disp" element={<Display />} />
      </Routes>
    </>
  );
}

export default App;