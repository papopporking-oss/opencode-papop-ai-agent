import { PageFooter } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

/**
 * Shared layout that wraps all sub-pages with the drawer, navbar, sidebar, and footer.
 * Children are rendered in the content area.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="crm-drawer-sm" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col min-h-screen">
        <Navbar />

        {/* Page Content — children rendered here */}
        <div className="flex-1 p-2 lg:p-3 space-y-2">
          {children}
        </div>

        <PageFooter />
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-20">
        <label htmlFor="crm-drawer-sm" aria-label="close sidebar" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}