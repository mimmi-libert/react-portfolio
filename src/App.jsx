import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Home from "./pages/Home";
import CaseDetail from "./pages/CaseDetail";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToHash />
        <Routes>
          {/* Default route (Swedish) */}
          <Route path="/" element={<Home />} />

          {/* English route */}
          <Route path="/en" element={<Home />} />

          {/* Case detail routes */}
          <Route path="/case/:caseId" element={<CaseDetail />} />
          <Route path="/en/case/:caseId" element={<CaseDetail />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
