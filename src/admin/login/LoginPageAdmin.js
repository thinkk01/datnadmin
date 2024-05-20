import React from "react";
import { useNavigate } from "react-router-dom";
import { getMe, loginAdmin } from "../../api/AccountApi";
import { toast } from "react-toastify";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import "./style.css";
import { useForm } from "react-hook-form";
const LoginPageAdmin = (props) => {
  const history = useNavigate();
  const loginHandler = (data) => {
    const userFlag = {
      ...data,
      admin: true,
    };
    loginAdmin(userFlag)
      .then((res) => {
        toast.success("Login is successfully!");
        localStorage.setItem("item", res.data.accessToken);
        getMe(res.data.accessToken)
          .then((res) => {
            props.userHandle(res.data);
            localStorage.setItem("username", "admin");
            localStorage.setItem("password", "123456");
            if (res.data.roleName === "ADMIN") {
              history("/");
            } else {
              history("/orders");
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => toast.error(error.response.data.Errors));
    console.log(data);
    console.log(userFlag);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="limiter ">
        <div className="container-login100 bg-backgroundLogin">
          <div className="wrap-login100 pt-[65px] pb-[54px] px-[55px]">
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit(loginHandler)}
            >
              <span className="login100-form-title pb-[49px]">
                Administrator Login
              </span>

              <div
                className="wrap-input100 validate-input mb-[23px]"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Type your username"
                  {...register("username", {
                    required: true,
                    pattern: /^\s*\S+.*/,
                  })}
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
                {errors.username && (
                  <div className="alert alert-danger error" role="alert">
                    Tài khoản không hợp lệ!
                  </div>
                )}
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                  {...register("password", {
                    required: true,
                    pattern: /^\s*\S+.*/,
                  })}
                />
                <span className="focus-input100" data-symbol="&#xf190;"></span>
                {errors.password && (
                  <div className="alert alert-danger error" role="alert">
                    Mật khẩu không hợp lệ!
                  </div>
                )}
              </div>

              <div className="text-right p-t-8 p-b-31">
                <a href="#">Forgot password?</a>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">Login</button>
                </div>
              </div>

              <div className="txt1 text-center pt-[54px] pb-[20px]">
                <span>Or Sign Up Using</span>
              </div>

              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <SlSocialFacebook />
                </a>

                <a href="#" className="login100-social-item bg2">
                  <SlSocialGoogle />
                </a>
              </div>

              <div className="flex-col-c pt-[15px]">
                <span className="txt1 pb-[17px]">Or Sign Up Using</span>

                <a href="#" className="txt2">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPageAdmin;
