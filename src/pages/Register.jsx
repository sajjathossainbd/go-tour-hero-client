import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, singInWithGoogleAuth, singInWithGithubAuth } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    singInWithGoogleAuth(navigate);
  };
  const handleGithub = () => {
    singInWithGithubAuth(navigate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const url = event.target.url.value;
    const password = event.target.password.value;

    // Password Verification
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
    if (!passwordRegex.test(password)) {
      alert("Please Provide Uppercase and Lowercase letters");
      return;
    }

    createUser(email, password, name, url, navigate);
  };
  return (
    <>
      <Helmet>
        <title>GoTour Hero - Register</title>
      </Helmet>
      <div className="lg:w-1/2 max-sm:mx-6 mx-auto mt-4 card shrink-0  shadow-2xl bg-base-100 pt-10">
        <h2 className="text-4xl font-bold mb-6 text-center font-playfair">
          Register your account
        </h2>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="link..."
                className="input input-bordered"
                name="url"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  name="password"
                  required
                />
                <span
                  className="absolute top-4 right-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success text-xl text-white">
                Register
              </button>
            </div>
          </form>
        </div>

        {/* OR CONTINUE WITH */}
        <div className="card-body pt-0">
          <h2 className="text-2xl font-bold mb-6 text-center font-playfair">
            Or Continue With
          </h2>
          <div className="flex items-center justify-center gap-6 text-5xl">
            <button onClick={handleGoogle}>
              <FcGoogle className="cursor-pointer" />
            </button>
            <button onClick={handleGithub}>
              <FaGithub className="cursor-pointer" />
            </button>
          </div>

          {/* Already Accout */}
          <div className="form-control mt-6 ">
            <p>
              Already Account?
              <Link to={"/login"} className="btn btn-link font-playfair">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
