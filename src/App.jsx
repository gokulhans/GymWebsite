import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Notes from "./pages/Notes/Notes";
import AddUser from "./pages/AddUser/AddUser";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <div className="ml-64 bg-gray-50 dark:bg-gray-900 h-screen dark:text-white">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/adduser" element={<AddUser />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
