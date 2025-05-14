import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import { useAuthStore } from "./store/useAuthStore";
import Loading from "./pages/Loading";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Handle loading state
  if (isCheckingAuth) {
    return <Loading />;
  }

  return (
    <>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
