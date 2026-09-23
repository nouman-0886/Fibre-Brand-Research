import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BrandPage from "./pages/BrandPage";
import BrandsPage from "./pages/BrandsPage";
import FabricsPage from "./pages/FabricsPage";
import FabricDetailPage from "./pages/FabricDetailPage";
import LearnPage from "./pages/LearnPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brand/:id" element={<BrandPage />} />
          <Route path="/fabrics" element={<FabricsPage />} />
          <Route path="/fabric/:id" element={<FabricDetailPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
