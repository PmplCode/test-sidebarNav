import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import MyWipass from "./pages/MyWipass";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/myWipass" element={<MyWipass />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
