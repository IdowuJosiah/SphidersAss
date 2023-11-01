import './App.css';
import {Route, Routes} from "react-router";
import IndexPage from "./Pages/IndexPage";
import CountDownPage from "./Pages/CountDownPage";


function App() {
  return (
    <Routes>
        <Route element={<IndexPage/>} path="/"/>
        <Route element={<CountDownPage/>} path="/count-down-page"/>
    </Routes>
  );
}

export default App;
