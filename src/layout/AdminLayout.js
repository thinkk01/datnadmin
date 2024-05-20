import React, { useState } from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LayoutAdmin from "../admin/layout/LayoutAdmin";

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const userHandler = (user) => {
    setUser(user);
  };
  return (
    <Router>
      <LayoutAdmin user={user} userHandler={userHandler}></LayoutAdmin>
      <ToastContainer></ToastContainer>
    </Router>
  );
};

export default AdminLayout;
