import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Transaction from "./Pages/Transaction";
import Sidebar from "./Components/Sidebar";

const AppRoutes = () => {
    return (
        <Router>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 overflow-hidden">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/transaction" element={<Transaction />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default AppRoutes;
