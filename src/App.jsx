import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Notes from "./pages/Notes/Notes";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <div className="ml-64 bg-gray-50 dark:bg-gray-900 h-screen dark:text-white">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
