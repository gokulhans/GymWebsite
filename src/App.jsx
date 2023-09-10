import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Notes from "./pages/Notes/Notes";
import AddUser from "./pages/AddUser/AddUser";
import Login from "./pages/Login/Login";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  return (
    <>
      <div className="ml-64 bg-gray-50 dark:bg-gray-900 h-screen dark:text-white">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          {isLoggedIn ? (
            <>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/adduser" element={<AddUser />} />
            </>
          ) : (
            navigate("/login")
          )}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
