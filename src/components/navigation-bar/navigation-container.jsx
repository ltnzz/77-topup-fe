import React from "react";
import { InputSearch } from "./input-search";
import { DropdownLink } from "./dropdown-link";
import { Link, useLocation } from "react-router";

export const Navbar = () => {
  const location = useLocation();

  // List halaman yang tidak akan muncul
  const hiddenPaths = ['/'];

  return (
    <div className="navbar bg-base-200 shadow-sm border-b border-base-300 pb-2 pt-2 sticky">
      <div className="flex flex-1 items-center gap-20">
        {/* <Link to="/" className="btn btn-ghost text-2xl">77Topup</Link> */}
        <Link to="/">
          <img 
            alt="77TopUp Logo"
            src="/77topup_logo_1b.png"
            className="min-w-52 w-52"/>
        </Link>
        {!hiddenPaths.includes(location.pathname) && (
          <div className="flex-1">
            <InputSearch />
          </div>
        )}
      </div>
      <div className="flex gap-6">
        <Link to="/" className="btn btn-ghost text-base">Beranda</Link>
        <Link to="/transaksi" className="btn btn-primary text-base">Cek Transaksi</Link>
        <Link to="/auth/login" className="btn btn-secondary text-base">Masuk</Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <DropdownLink />
          </ul>
        </div>
      </div>
    </div>
  );
};
