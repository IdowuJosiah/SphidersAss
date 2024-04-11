import './App.scss';
import { ThemeProvider } from './Context/ThemeContext';
import { Route, Routes } from "react-router";
import IndexPage from "./Pages/IndexPage";
import CountDownPage from "./Pages/CountDownPage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ErrorPage from "./Pages/ErrorPage";
import BlogPages from "./Pages/BlogPages";
import CoursesPage from './Pages/CoursesPage';
import ArticleOnePage from "./Pages/ArticleOnePage";
import ArticleTwoPage from "./Pages/ArticleTwoPage";
import ArticleThreePage from "./Pages/ArticleThreePage";
import ArticleFourPage from "./Pages/ArticleFourPage";
import ArticleFivePage from "./Pages/ArticleFivePage";
import ArticleSixPage from "./Pages/ArticleSixPage";



function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<CountDownPage />} path="/count-down-page" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactUsPage />} path="/contact-us" />
        <Route element={<ErrorPage />} path="page-not-found" />
        <Route element={<BlogPages />} path="blogs" />
        <Route element={<CoursesPage />} path="courses" />
        <Route element={<ArticleOnePage />} path="/sphiderass-article-i" />
        <Route element={<ArticleTwoPage />} path="/sphiderass-article-ii" />
        <Route element={<ArticleThreePage />} path="/sphiderass-article-iii" />
        <Route element={<ArticleFourPage />} path="/sphiderass-article-iv" />
        <Route element={<ArticleFivePage />} path="/sphiderass-article-v" />
        <Route element={<ArticleSixPage />} path="/sphiderass-article-vi" />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
