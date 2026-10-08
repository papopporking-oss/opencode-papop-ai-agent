"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Define all tab routes for active state matching. */
const TABS = [
  { label: "Overview", href: "/template-basic-layout-deepseek-small-main" },
  { label: "Analytics", href: "/template-basic-layout-deepseek-small-main/analytics" },
  { label: "Reports", href: "/template-basic-layout-deepseek-small-main/reports" },
  { label: "Settings", href: "/template-basic-layout-deepseek-small-main/settings" },
];

/**
 * Navbar — compact top navigation bar with tabs and user dropdown.
 * Tabs auto-highlight based on current route via usePathname().
 * All links use client-side navigation (no page reload).
 */
export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-10 min-h-0 py-1">
      {/* Left: hamburger menu + title */}
      <div className="navbar-start">
        <label htmlFor="crm-drawer-sm" className="btn btn-ghost btn-xs drawer-button lg:hidden">
          Menu
        </label>
        <span className="text-sm font-semibold ml-1">CRM</span>
      </div>

      {/* Center: navigation tabs (hidden on small screens) */}
      <div className="navbar-center hidden lg:flex">
        <div role="tablist" className="tabs tabs-box tabs-sm">
          {TABS.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              role="tab"
              className={`tab text-xs ${pathname === tab.href ? "tab-active" : ""}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right: user dropdown */}
      <div className="navbar-end gap-1">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-ghost btn-xs">
            <div className="avatar placeholder">
              <div className="w-6 rounded-full bg-base-300">
                <span className="text-xs">DN</span>
              </div>
            </div>
            <span className="hidden sm:inline ml-1 text-xs">Denish</span>
          </summary>
          <ul className="dropdown-content menu bg-base-100 rounded-box w-44 p-1 shadow border border-base-300 z-20 text-sm">
            <li className="menu-title text-xs">Account</li>
            <li><Link href="/template-basic-layout-deepseek-small-main/account/profile" className="text-xs">View Profile</Link></li>
            <li><Link href="/template-basic-layout-deepseek-small-main/account/team" className="text-xs">Team</Link></li>
            <li><Link href="/template-basic-layout-deepseek-small-main/account/invites" className="text-xs">Invites</Link></li>
            <li className="menu-title text-xs">Platform</li>
            <li><Link href="/template-basic-layout-deepseek-small-main/settings" className="text-xs">Settings</Link></li>
            <li><Link href="/template-basic-layout-deepseek-small-main/billing" className="text-xs">Billing</Link></li>
            <li><Link href="/template-basic-layout-deepseek-small-main/help" className="text-xs">Support</Link></li>
            <div className="divider my-0"></div>
            <li><Link href="/template-basic-layout-deepseek-small-main/sign-out" className="text-xs">Sign Out</Link></li>
          </ul>
        </details>
      </div>
    </div>
  );
}