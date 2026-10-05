"use client";

export default function Navbar() {
  return (
    <nav className="navbar min-h-14 border-b border-base-300 bg-base-100 px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="navbar-start">
        <label htmlFor="admin-drawer" className="btn btn-ghost btn-sm drawer-button" aria-label="Toggle sidebar">
          ☰
        </label>
        <span className="ml-2 text-sm font-semibold sm:text-base">
          Dashboard
        </span>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button type="button" className="btn btn-ghost btn-sm">
            Admin
          </button>
          <ul className="menu dropdown-content z-50 mt-2 w-36 rounded-box border border-base-300 bg-base-100 p-2 shadow-sm">
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}