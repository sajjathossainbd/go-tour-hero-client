import { Link, NavLink } from "react-router-dom";
import Logo from "./../assets/goTour-hero.png";

function Navbar() {
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "btn px-6 border-[0.6px] border-[#31C292] hover:border-[#31C292] text-[#31C292] rounded-lg bg-white hover:bg-white"
            : "btn px-6 bg-white hover:bg-white border-none shadow-none"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/all-tourists-spot"}
        className={({ isActive }) =>
          isActive
            ? "btn px-6 border-[0.6px] border-[#31C292] hover:border-[#31C292] text-[#31C292] rounded-lg bg-white hover:bg-white"
            : "btn px-6 bg-white hover:bg-white border-none shadow-none"
        }
      >
        All Tourists Spot
      </NavLink>
      <NavLink
        to={"/add-tourists-spot"}
        className={({ isActive }) =>
          isActive
            ? "btn px-6 border-[0.6px] border-[#31C292] hover:border-[#31C292] text-[#31C292] rounded-lg bg-white hover:bg-white"
            : "btn px-6 bg-white hover:bg-white border-none shadow-none"
        }
      >
        Add Tourists Spot
      </NavLink>
      <NavLink
        to={"/my-tourists-spot-list"}
        className={({ isActive }) =>
          isActive
            ? "btn px-6 border-[0.6px] border-[#31C292] hover:border-[#31C292] text-[#31C292] rounded-lg bg-white hover:bg-white"
            : "btn px-6 bg-white hover:bg-white border-none shadow-none"
        }
      >
        My List
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-12" src={Logo} alt="" />
          <p className=" text-3xl font-extrabold font-playfair"> LuxLiving</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  flex flex-row items-center text-sm">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile Image"
                  src={
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              <h2 className="text-2xl font-bold text-center py-4">
                {"Unknown"}
              </h2>
              <li>
                <Link to={"/update-profile"}>Update Profile</Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
          <button
            onClick={""}
            className="btn bg-[#e76741] hover:bg-[#FFA488] text-white mr-4 px-5"
          >
            Logout
          </button>
        </div>

        <Link
          to={"/login"}
          className="btn bg-[#31C292] hover:bg-[#1e5aae] text-white mr-4 px-5"
        >
          Sing In
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
