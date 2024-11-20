import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPageNotFound, Home } from "./pages";
function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ErrorPageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
