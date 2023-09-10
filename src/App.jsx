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
      <div
        className={`bg-gray-50 dark:text-white dark:bg-gray-900 h-screen ${
          isLoggedIn ? "ml-64" : ""
        }`}
      >
        {isLoggedIn && <Sidebar />}
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route
            path="*"
            element={isLoggedIn ? <h1>Not found</h1> : <Login />}
          />
          {isLoggedIn ? (
            <>
              <Route path="/users" element={<Users />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/adduser" element={<AddUser />} />
            </>
          ) : (
            navigate("/login")
          )}
          <Route path="/login" element={isLoggedIn ? <Home /> : <Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
