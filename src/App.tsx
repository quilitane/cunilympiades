import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";

const App: React.FC = () => {
  return (
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </HashRouter>
    </DataProvider>
  );
};


export default App;