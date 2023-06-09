import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
const {logout} = useAuthCall()
  return (
    <div>
      <div className="my-   flex items-center justify-between py-3 bg-red-200 px-16">
        {/* navbar */}
        <div className="ml-2 flex space-x-5">
          <div className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 border-red-400 ">
            BLOG APP
          </div>
        </div>
        {/* button */}
        <div>
          {currentUser ? (
            <Link
              className="rounded-3xl border-2 bg-red-500 p-2 font-bold text-white  shadow-xl shadow-red-500/50"
              onClick={logout}
            >
              Logout
            </Link>
          ) : (
            <div>
              <Link
                className="rounded-3xl border-2 bg-red-500 p-2 font-bold text-white  shadow-xl shadow-red-500/50"
                to="/register"
              >
                Register
              </Link>
              <Link
                className="rounded-3xl border-2 bg-red-500 p-2 font-bold text-white  shadow-xl shadow-red-500/50"
                to="/login"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
