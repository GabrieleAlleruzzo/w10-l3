import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomHeader from "./assets/CustomComponents/CustomHeader";
import CustomFooter from "./assets/CustomComponents/CustomFooter";
import CustomMain from "./assets/CustomComponents/CustomMain";
import ClassLoTR from "./assets/CustomComponents/ClassLoTR";
import ClassSW from "./assets/CustomComponents/ClassSW";
import Class from "./assets/CustomComponents/Class";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <header>
          <CustomHeader />
        </header>
        <div className="d-flex flex-column min-vh-100">
          <main className="flex-grow-1">
            <CustomMain />
            <Routes>
              <Route path="/Star-wars" element={<ClassSW />} />
              <Route path="/Lord-of-the-rings" element={<ClassLoTR />} />
              <Route path="/Shit" element={<Class />} />
            </Routes>
          </main>
          <footer className="mt-5">
            <CustomFooter />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
