import React from "react";
import Container from "../Container/Container";
import logoImg from "../../assets/support-ticket.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li className="hover">Home</li>
                  <li className="hover">FAQ</li>
                  <li className="hover">Changelog</li>
                  <li className="hover">Blog</li>
                  <li className="hover">Download</li>
                  <li className="hover">Contact</li>
                </ul>
              </div>
              <div className="flex items-center gap-1 md:gap-3">
                <img
                  className="w-10 h-10 hidden md:block"
                  src={logoImg}
                  alt=""
                />
                <h1 className="text-lg md:text-xl font-bold">
                  CS — Ticket System
                </h1>
              </div>
            </div>

            <div className="">
              <ul className="md:inline-flex items-center gap-6 mr-8 hidden">
                <li className="hover">Home</li>
                <li className="hover">FAQ</li>
                <li className="hover">Changelog</li>
                <li className="hover">Blog</li>
                <li className="hover">Download</li>
                <li className="hover">Contact</li>
              </ul>
              <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white">
                + New Ticket
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
