import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import logins from "../../assets/login.json";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { logIn,googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleGoogle = () => {
    googleSignIn()
    .then((result) => {
      const user = result.user;
      const saveUser = {
        name: user.displayName,
        email: user.email,
        position: "Student"
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
      .then((res) => res.json())
      .then(() => {
        navigate(from, { replace: true });
      });
    })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Login | KnockOut</title>
      </Helmet>
      <div className="hero min-h-screen bg-[url('/public/Sprinkle.svg')]">
        <div className="hero-content flex-col md:flex-row">
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5  h-56  sm:h-96">
            <Lottie animationData={logins} loop={true} />
          </div>
        </div>

          <div>
          <div className="text-center mb-2 lg:text-left">
            <h1 className="text-5xl font-bold text-white pb-2">Please Login Here !!</h1>
          </div>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body p-[1em]">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-primary">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div>
                <p className="text-error">{error}</p>
              </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">{show ? "Hide" : "Show"}</span>
                    <div onClick={() => setShow(!show)}>
                      {show ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>
                {/* TODO: make button disabled for captcha */}
                <div className="form-control">
                  <input
                    disabled={false}
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div>
                <p className="">
                  <small>
                    New to KnockOut?
                    <Link className="link link-primary pl-1" to="/register">
                      Register here
                    </Link>
                  </small>
                </p>
              </div> 
              <div className="divider">O</div>
              <div className="text-center space-x-2">
                <button
                  onClick={handleGoogle}
                  className="btn btn-circle btn-outline"
                >
                  <FcGoogle size="2em"/>
                </button>
                <button
                  onClick={handleGoogle}
                  className="btn btn-circle btn-outline"
                >
                  <BsGithub size="2em"/>
                </button>
              </div> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
