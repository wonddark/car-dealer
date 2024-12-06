"use client";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="login-wrapper d-flex align-items-center justify-content-center text-center">
        <div className="background-shape"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8">
              <img
                className="big-logo"
                src="img/core-img/logo-white.png"
                alt=""
              />

              <div className="register-form mt-5">
                <form onClick={(e) => e.preventDefault()}>
                  <div className="form-group text-start mb-4">
                    <span>Username</span>
                    <label htmlFor="username">
                      <i className="ti ti-user"></i>
                    </label>
                    <input
                      className="form-control"
                      id="username"
                      type="text"
                      placeholder="info@example.com"
                    />
                  </div>
                  <div className="form-group text-start mb-4">
                    <span>Password</span>
                    <label htmlFor="password">
                      <i className="ti ti-key"></i>
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <Link href="/home">
                    <button
                      className="btn btn-warning btn-lg w-100"
                      type="submit"
                    >
                      Log In
                    </button>
                  </Link>
                </form>
              </div>

              <div className="login-meta-data">
                <Link
                  className="forgot-password d-block mt-3 mb-1"
                  href="/forget-password"
                >
                  Forgot Password?
                </Link>
                <p className="mb-0">
                  Didnt have an account?
                  <Link className="mx-1" href="/register">
                    Register Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
