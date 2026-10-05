"use client";

export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="admin-drawer"
        aria-label="Close sidebar"
        className="drawer-overlay"
      />

      <aside className="flex min-h-full w-[180px] flex-col border-r border-base-300 bg-base-100">
        <div className="flex h-14 items-center border-b border-base-300 px-4">
          <span className="text-sm font-semibold tracking-wide">
            ADMIN
          </span>
        </div>

        <ul className="menu menu-sm w-full flex-1 p-2">
          <li>
            <a href="#" className="active">
              Dashboard
            </a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#">Users</a>
          </li>

          <li>
            <a href="#">Settings</a>
          </li>
        </ul>

        <div className="border-t border-base-300 p-3">
          <div className="text-xs opacity-60">
            Admin Panel
          </div>
        </div>
      </aside>
    </div>
  );
}