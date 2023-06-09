import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import logins from "../../assets/login.json";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile , googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (navigation.state === "loading") {
    return <progress className="progress w-56"></progress>;
  }

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

    //   updateUserProfile(data.name, data.photoURL)
    //     .then(() => {
    //       const saveUser = { name: data.name, email: data.email };
    //       fetch("http://localhost:5000/users", {
    //         method: "POST",
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //         body: JSON.stringify(saveUser),
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data.insertedId) {
    //             reset();
    //             Swal.fire({
    //               position: "top-end",
    //               icon: "success",
    //               title: "User created successfully.",
    //               showConfirmButton: false,
    //               timer: 1500,
    //             });
    //             navigate("/");
    //           }
    //         });
    //     })
    //     .catch((error) => console.log(error));
    });
  };
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        toast.warning("Login Unccessfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>KnockOut | Register</title>
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
              <h1 className="text-5xl font-bold text-white pb-2">
                Please Register Here !!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirm_password", {
                      required: true,
                    })}
                    placeholder="Confirm password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
                <div>
                  <p className="p-2">
                    <small>
                      Already have an account?
                      <Link className="link link-primary" to="/login">
                        Login here
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
                    <FcGoogle size="2em" />
                  </button>
                  <button
                    onClick={handleGoogle}
                    className="btn btn-circle btn-outline"
                  >
                    <BsGithub size="2em" />
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

export default Register;
