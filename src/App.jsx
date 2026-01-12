import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AuthPages from "./sighin/AuthPages";

function Layout() {
  const location = useLocation();

  // Routes where Header & Footer should be hidden
  const hideLayoutRoutes = ["/signin"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signin" element={<AuthPages />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
