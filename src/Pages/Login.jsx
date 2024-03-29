import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const axios = useAxios();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    try {
      const user = await login(email, password);
      console.log(user.user.email);
      axios.post("/auth/access-token", {email: user.user.email})
      toast.success("Login Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    // login(email, password)
    //   .then((result) => {
    //     const user = result?.user;
    //     toast.success("Login Successfully");
    //     console.log(user);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <h2 className="ml-12">
              New Here?{" "}
              <span>
                <Link to={"/register"}>
                  <button className="btn btn-link">Register Now</button>
                </Link>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
