import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Routes";
import LoginPageAdmin from "../login/LoginPageAdmin";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/Topnav";

const LayoutAdmin = (props) => {
  return (
    <BrowserRouter>
      {props.user && (
        <Route
          render={(propss) => (
            <div className="layout">
              <Sidebar {...propss} user={props.user} />
              <div className="layout__content">
                <TopNav
                  user={props.user}
                  userHandler={props.userHandler}
                ></TopNav>
                <div className="layout__content-main">
                  <Routes></Routes>
                </div>
              </div>
            </div>
          )}
        ></Route>
      )}

      {!props.user && <LoginPageAdmin {...props}></LoginPageAdmin>}
    </BrowserRouter>
  );
};

export default LayoutAdmin;
