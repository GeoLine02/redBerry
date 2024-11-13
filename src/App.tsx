import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./components/moduls/common/constants";
import Header from "./components/header/components";
import Home from "./components/Home/components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path={routes.HOME} />
      </Routes>
    </>
  );
}

export default App;
