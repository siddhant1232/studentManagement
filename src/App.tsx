import { BrowserRouter, Route, Routes } from "react-router-dom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/LoginPage";
import About from './components/About';
import BudgetTracker from "./components/BudgetTracker"; // import BudgetTracker
import RealTimeTransactionAnalysis from "./components/RealTimeTransactionAnalysis"; // import RealTimeTransactionAnalysis
// import PerformanceTrendAnalysis from "./components/PerformanceTrendAnalysis"; // import PerformanceTrendAnalysis

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <Features />
            <Footer />
          </div>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} /> {/* About page route */}
        
        {/* Adding routes for the new components */}
        <Route path="/budget" element={<BudgetTracker />} />
        <Route path="/realtime-analysis" element={<RealTimeTransactionAnalysis />} />
        {/* <Route path="/performance-trend" element={<PerformanceTrendAnalysis />} /> */}
        
        {/* Footer can be included globally as it's part of layout */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
