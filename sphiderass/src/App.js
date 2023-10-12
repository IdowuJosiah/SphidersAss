import './App.css';
import {Route, Routes} from "react-router";
import IndexPage from "./Pages/IndexPage";

function App() {
  return (
    <Routes>
        <Route element={<IndexPage/>} path="/"/>
    </Routes>
  );
}

export default App;
