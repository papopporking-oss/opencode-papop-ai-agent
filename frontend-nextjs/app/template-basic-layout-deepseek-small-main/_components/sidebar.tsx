"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Sidebar — compact narrow navigation drawer.
 * Links use client-side navigation (no page reload).
 * Active state auto-highlighted via usePathname().
 */
export function Sidebar() {
  const pathname = usePathname();

  /** Utility to conditionally apply menu-active class. */
  const active = (href: string) =>
    pathname === href ? "menu-active" : "";

  return (
    <ul className="menu bg-base-200 min-h-full w-48 p-2 gap-0.5 text-sm">
      {/* Logo */}
      <li className="mb-1">
        <Link href="/template-basic-layout-deepseek-small-main" className="text-sm font-bold p-2">Nexus</Link>
      </li>

      {/* Dashboard Section */}
      <li className="menu-title text-xs">Dashboard</li>
      <li>
        <Link
          href="/template-basic-layout-deepseek-small-main/dashboards/ecommerce"
          className={`text-xs ${active("/template-basic-layout-deepseek-small-main/dashboards/ecommerce")}`}
        >Ecommerce</Link>
      </li>
      <li>
        <Link
          href="/template-basic-layout-deepseek-small-main"
          className={`text-xs ${active("/template-basic-layout-deepseek-small-main")}`}
        >CRM</Link>
      </li>
      <li>
        <Link
          href="/template-basic-layout-deepseek-small-main/dashboards/gen-ai"
          className={`text-xs ${active("/template-basic-layout-deepseek-small-main/dashboards/gen-ai")}`}
        >Gen AI</Link>
      </li>

      {/* Agentic Hub Section */}
      <li className="menu-title text-xs mt-1">Agentic Hub</li>
      <li>
        <Link
          href="/template-basic-layout-deepseek-small-main/agentic-hub/storage"
          className={`text-xs ${active("/template-basic-layout-deepseek-small-main/agentic-hub/storage")}`}
        >Storage</Link>
      </li>

      {/* Apps Section */}
      <li className="menu-title text-xs mt-1">Apps</li>
      <li>
        <details>
          <summary className="text-xs">Ecommerce</summary>
          <ul>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/apps/ecommerce/orders"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/ecommerce/orders")}`}
              >Orders</Link>
            </li>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/apps/ecommerce/products"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/ecommerce/products")}`}
              >Products</Link>
            </li>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/apps/ecommerce/customers"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/ecommerce/customers")}`}
              >Customers</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="text-xs">Gen AI</summary>
          <ul>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/apps/gen-ai/home"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/gen-ai/home")}`}
              >Home</Link>
            </li>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/apps/gen-ai/content"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/gen-ai/content")}`}
              >Content</Link>
            </li>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/apps/gen-ai/images"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/gen-ai/images")}`}
              >Images</Link>
            </li>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/apps/gen-ai/library"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/gen-ai/library")}`}
              >Library</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link
          href="/template-basic-layout-deepseek-small-main/apps/file-manager"
          className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/file-manager")}`}
        >File Manager</Link>
      </li>
      <li>
        <Link
          href="/template-basic-layout-deepseek-small-main/apps/chat"
          className={`text-xs ${active("/template-basic-layout-deepseek-small-main/apps/chat")}`}
        >Chat</Link>
      </li>

      {/* Extras Section */}
      <li className="menu-title text-xs mt-1">Extras</li>
      <li>
        <details>
          <summary className="text-xs">Auth</summary>
          <ul>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/auth/login"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/auth/login")}`}
              >Login</Link>
            </li>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/auth/register"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/auth/register")}`}
              >Register</Link>
            </li>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/auth/forgot-password"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/auth/forgot-password")}`}
              >Forgot Password</Link>
            </li>
            <li>
              <Link
                href="/template-basic-layout-deepseek-small-main/auth/reset-password"
                className={`text-xs ${active("/template-basic-layout-deepseek-small-main/auth/reset-password")}`}
              >Reset Password</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link
          href="/template-basic-layout-deepseek-small-main/settings"
          className={`text-xs ${active("/template-basic-layout-deepseek-small-main/settings")}`}
        >Settings</Link>
      </li>
      <li>
        <Link
          href="/template-basic-layout-deepseek-small-main/help"
          className={`text-xs ${active("/template-basic-layout-deepseek-small-main/help")}`}
        >Get Help</Link>
      </li>
    </ul>
  );
}