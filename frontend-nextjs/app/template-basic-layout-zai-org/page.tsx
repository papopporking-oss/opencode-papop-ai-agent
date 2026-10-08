export default function Page() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 border-b border-base-300">
          <div className="navbar-start">
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button lg:hidden">
              Menu
            </label>
            <span className="text-lg font-semibold ml-2">CRM Dashboard</span>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="tabs tabs-box">
              <button className="tab tab-active">Overview</button>
              <button className="tab">Analytics</button>
              <button className="tab">Reports</button>
            </div>
          </div>
          <div className="navbar-end gap-2">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <div className="avatar placeholder">
                  <div className="w-8 rounded-full bg-base-300">
                    <span className="text-sm">DN</span>
                  </div>
                </div>
                <span className="hidden sm:inline">Denish</span>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-lg border border-base-300">
                <li className="menu-title">Account</li>
                <li><button>View Profile</button></li>
                <li><button>Settings</button></li>
                <li><button>Billing</button></li>
                <li className="menu-title">Team</li>
                <li><button>Team Members</button></li>
                <li><button>Invites</button></li>
                <li><button>Sign Out</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Breadcrumbs */}
          <div className="text-sm breadcrumbs mb-4">
            <ul>
              <li><button>Nexus</button></li>
              <li><button>Dashboards</button></li>
              <li>CRM</li>
            </ul>
          </div>

          {/* Stats Overview */}
          <div className="stats stats-vertical sm:stats-horizontal w-full bg-base-100 border border-base-300 mb-6">
            <div className="stat">
              <div className="stat-title">Customers</div>
              <div className="stat-value">4,235</div>
              <div className="stat-desc">+8.04% from last month</div>
            </div>
            <div className="stat">
              <div className="stat-title">Revenue</div>
              <div className="stat-value">$75,400</div>
              <div className="stat-desc">+15.3% from last month</div>
            </div>
            <div className="stat">
              <div className="stat-title">Closed Deals</div>
              <div className="stat-value">574</div>
              <div className="stat-desc">-2.4% from last month</div>
            </div>
            <div className="stat">
              <div className="stat-title">Satisfaction</div>
              <div className="stat-value">93%</div>
              <div className="stat-desc">+2.3% from last month</div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Charts & Tables */}
            <div className="lg:col-span-2 space-y-6">
              {/* Sale Metrics Card */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Sale Metrics 2024 vs. 2025</h2>
                  <div className="h-48 bg-base-200 rounded-box flex items-center justify-center">
                    <span className="text-base-content/50">Chart Placeholder</span>
                  </div>
                </div>
              </div>

              {/* Recent Deals Table */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Recent Deals</h2>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Deal Name</th>
                          <th>Value</th>
                          <th>Stage</th>
                          <th>Owner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Enterprise License</td>
                          <td>$12,500</td>
                          <td><span className="badge badge-ghost">Negotiation</span></td>
                          <td>John Doe</td>
                        </tr>
                        <tr>
                          <td>Startup Package</td>
                          <td>$4,200</td>
                          <td><span className="badge badge-ghost">Proposal</span></td>
                          <td>Jane Smith</td>
                        </tr>
                        <tr>
                          <td>Annual Subscription</td>
                          <td>$8,900</td>
                          <td><span className="badge badge-ghost">Closed Won</span></td>
                          <td>Mike Johnson</td>
                        </tr>
                        <tr>
                          <td>Consulting Services</td>
                          <td>$15,000</td>
                          <td><span className="badge badge-ghost">Qualification</span></td>
                          <td>Sarah Wilson</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-ghost btn-sm">View All Deals</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Activity */}
            <div className="space-y-6">
              {/* Realtime Stats */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Realtime Sales</h2>
                  <div className="stat">
                    <div className="stat-figure">
                      <span className="text-3xl">541</span>
                    </div>
                    <div className="stat-title">Last Hour</div>
                    <div className="stat-value text-2xl">494</div>
                  </div>
                  <div className="divider my-0"></div>
                  <div className="stat">
                    <div className="stat-figure">
                      <span className="text-3xl">$51,474</span>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value text-2xl">$49,162</div>
                    <div className="stat-desc">Last Month</div>
                  </div>
                </div>
              </div>

              {/* Customer Retention */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Customer Retention</h2>
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold">3.14%</div>
                    <div className="text-sm text-base-content/60">vs 2.16% last week</div>
                  </div>
                </div>
              </div>

              {/* Integrations */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Integrations</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-box">
                      <div>
                        <div className="font-medium">Notion</div>
                        <div className="text-sm text-base-content/60">Productivity app</div>
                      </div>
                      <button className="btn btn-ghost btn-sm">Disconnect</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-box">
                      <div>
                        <div className="font-medium">Hubspot</div>
                        <div className="text-sm text-base-content/60">CRM platform</div>
                      </div>
                      <button className="btn btn-ghost btn-sm">Disconnect</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upgrade Card */}
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Upgrade your plan</h2>
                  <p className="text-sm text-base-content/70">Save 30% today with our premium plan</p>
                  <div className="card-actions">
                    <button className="btn w-full">Upgrade Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer footer-center p-4 border-t border-base-300 bg-base-100 text-base-content">
          <aside>
            <p>Built and designed with care by Denish</p>
          </aside>
        </footer>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-64 p-4">
          {/* Logo */}
          <li className="mb-4">
            <button className="text-lg font-bold hover:bg-transparent">Nexus</button>
          </li>

          {/* Dashboard Section */}
          <li className="menu-title">Dashboard</li>
          <li><button>Ecommerce</button></li>
          <li><button className="menu-active">CRM</button></li>
          <li><button>Gen AI</button></li>

          {/* Agentic Hub Section */}
          <li className="menu-title">Agentic Hub</li>
          <li><button>Storage</button></li>

          {/* Apps Section */}
          <li className="menu-title">Apps</li>
          <li>
            <details>
              <summary>Ecommerce</summary>
              <ul>
                <li><button>Orders</button></li>
                <li><button>Products</button></li>
                <li><button>Customers</button></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Gen AI</summary>
              <ul>
                <li><button>Home</button></li>
                <li><button>Content</button></li>
                <li><button>Images</button></li>
                <li><button>Library</button></li>
              </ul>
            </details>
          </li>
          <li><button>File Manager</button></li>
          <li><button>Chat</button></li>

          {/* Extras Section */}
          <li className="menu-title">Extras</li>
          <li>
            <details>
              <summary>Auth</summary>
              <ul>
                <li><button>Login</button></li>
                <li><button>Register</button></li>
                <li><button>Forgot Password</button></li>
                <li><button>Reset Password</button></li>
              </ul>
            </details>
          </li>
          <li><button>Settings</button></li>
          <li><button>Get Help</button></li>
        </ul>
      </div>
    </div>
  );
}
