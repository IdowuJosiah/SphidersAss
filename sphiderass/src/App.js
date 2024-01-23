import './App.scss';
import {Route, Routes} from "react-router";
import IndexPage from "./Pages/IndexPage";
import CountDownPage from "./Pages/CountDownPage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ErrorPage from "./Pages/ErrorPage";
import BlogPages from "./Pages/BlogPages";


function App() {
  return (
    <Routes>
        <Route element={<IndexPage/>} path="/"/>
        <Route element={<CountDownPage/>} path="/count-down-page"/>
        <Route element={<AboutPage/>} path="/about"/>
        <Route element={<ContactUsPage/>} path="/contact-us"/>
        <Route element={<ErrorPage/>} path="page-not-found"/>
        <Route element={<BlogPages/>} path="blogs"/>
    </Routes>
  );
}

export default App;
