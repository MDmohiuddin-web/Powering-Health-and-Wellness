import { Link } from "react-router-dom";

import bag from "../assets/cart.svg"
const Navbar = () => {
    const links = (
    <>
   
    {/*  */}
    <li>
            <details>
                <summary>Courses</summary>
                <ul className="p-2">
                    <li><a>Submenu</a></li>
                    <li><a>Submenu</a></li>
                </ul>
            </details>
    </li>
    {/*  */}
    <li>
            <details>
                <summary>Instructors</summary>
                <ul className="p-2">
                    <li><a>Submenu</a></li>
                    <li><a>Submenu</a></li>
                </ul>
            </details>
    </li>
    {/*  */}
    <li>
            <details>
                <summary>Blogs</summary>
                <ul className="p-2">
                    <li><a>Submenu</a></li>
                    <li><a>Submenu</a></li>
                </ul>
            </details>
    </li>
    {/*  */}
    <li><a>About</a></li>
    {/*  */}
    <li><a>Contact</a></li>
    </>
    
    )
    return (
        <div>
            <div className="navbar bg-base-100 md:w-4/5 mx-auto font-onest">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                    <Link className=" text-xl" to={'/'}>Logo</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 z-[10]">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <img src={bag} alt="" />
                    <a className="btn text-white rounded-full bg-primary px-7 hover:bg-black">Login</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;