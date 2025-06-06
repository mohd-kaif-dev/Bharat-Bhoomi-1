import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Common/Footer";
import ArticleDetails from "./Pages/ArticleDetails";
import Article2 from "./Pages/Article2E.";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Article3 from "./Pages/Article3H";
import Article5E from "./Pages/Article5E";
import Article4H from "./Pages/Article4H";

// Main App component that orchestrates the layout
const App = () => {
  return (
    <BrowserRouter>
      <div
        className={`min-h-screen flex flex-col font-sans transition-colors duration-300
                    bg-primary-bg text-primary-text
                    dark:bg-secondary-bg dark:text-secondary-text`}
      >
        <Navbar />
        {/* Main content area, rendered by the Home component */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/v1" replace />} />
            <Route path="v1" element={<Home />} />
            <Route path="v1/news" element={<ArticleDetails />} />
            <Route path="v1/article2E" element={<Article2 />} />
            <Route path="v1/article3H" element={<Article3 />} />
            <Route path="v1/article4H" element={<Article4H />} />
            <Route path="v1/article5E" element={<Article5E />} />
            <Route path="v1/login" element={<Login />} />
            <Route path="v1/register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
