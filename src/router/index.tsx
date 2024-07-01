import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routers: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </Router>
  );
};

export default Routers;
