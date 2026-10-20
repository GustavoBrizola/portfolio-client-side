import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/home/Home';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
  );
}
