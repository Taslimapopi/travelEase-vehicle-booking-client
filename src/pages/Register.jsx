import { updateProfile } from "firebase/auth";
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/context";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    setError("");

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      setError(
        "❌ Password must contain:\n- At least one uppercase letter\n- At least one lowercase letter\n- Minimum 6 characters"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName, photoURL })
          .then(() => {})
          .catch((error) => {
            alert(error);
          });
        alert("successfully completed signup");
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center mt-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 ">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              {/* photourl */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              {/* <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              /> */}
              <div className="relative">
                <label className="label z-5 text-left">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={handleShowPassword}
                  className="btn btn-xs absolute right-5 top-6 z-10"
                >
                  {showPassword ? <IoEyeOffSharp /> : <FaRegEye />}
                </button>
              </div>
              {/* register button */}
              <button
                type="submit"
                className="btn btn-neutral mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-[#e5e5e5]"
              >
                Register
              </button>
              <p className="font-semibold text-center pt-5">
                Already Have An Account ?{" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </form>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
