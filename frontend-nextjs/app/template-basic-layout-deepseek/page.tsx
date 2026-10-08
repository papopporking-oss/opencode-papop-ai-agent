export default function Page() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="crm-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-10">
          <div className="navbar-start">
            <label htmlFor="crm-drawer" className="btn btn-ghost drawer-button lg:hidden">
              Menu
            </label>
            <span className="text-lg font-semibold ml-2">CRM Dashboard</span>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div role="tablist" className="tabs tabs-box">
              <button role="tab" className="tab tab-active">Overview</button>
              <button role="tab" className="tab">Analytics</button>
              <button role="tab" className="tab">Reports</button>
              <button role="tab" className="tab">Settings</button>
            </div>
          </div>
          <div className="navbar-end gap-2">
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost">
                <div className="avatar placeholder">
                  <div className="w-8 rounded-full bg-base-300">
                    <span className="text-sm">DN</span>
                  </div>
                </div>
                <span className="hidden sm:inline ml-2">Denish</span>
              </summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-lg border border-base-300 z-20">
                <li className="menu-title">Account</li>
                <li><button>View Profile</button></li>
                <li><button>Team</button></li>
                <li><button>Invites</button></li>
                <li className="menu-title">Platform</li>
                <li><button>Settings</button></li>
                <li><button>Billing</button></li>
                <li><button>Support</button></li>
                <div className="divider my-1"></div>
                <li><button>Sign Out</button></li>
              </ul>
            </details>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-4 lg:p-6 space-y-6">

          {/* Notification Banner */}
          <div className="alert bg-base-200 border border-base-300 rounded-box">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
              <div>
                <span className="font-medium">Your latest results are ready</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="badge badge-ghost">Forecast Report (12 MB)</div>
                <div className="badge badge-ghost">Generated Summary (354 KB)</div>
                <button className="btn btn-ghost btn-sm">View All</button>
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="breadcrumbs text-sm">
            <ul>
              <li><button className="link link-hover">Nexus</button></li>
              <li><button className="link link-hover">Dashboards</button></li>
              <li className="font-medium">CRM</li>
            </ul>
          </div>

          {/* Stats Overview */}
          <div className="stats stats-vertical sm:stats-horizontal w-full bg-base-100 border border-base-300 rounded-box">
            <div className="stat">
              <div className="stat-title">Customers</div>
              <div className="stat-value text-2xl lg:text-3xl">4,235</div>
              <div className="stat-desc">
                <span className="text-base-content/60">8.04%</span> from last month
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Revenue</div>
              <div className="stat-value text-2xl lg:text-3xl">$75,400</div>
              <div className="stat-desc">
                <span className="text-base-content/60">15.3%</span> from last month
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Closed Deals</div>
              <div className="stat-value text-2xl lg:text-3xl">574</div>
              <div className="stat-desc">
                <span className="text-base-content/60">-2.4%</span> from last month
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Satisfaction</div>
              <div className="stat-value text-2xl lg:text-3xl">93%</div>
              <div className="stat-desc">
                <span className="text-base-content/60">2.3%</span> from last month
              </div>
            </div>
          </div>

          {/* Main Grid: Left (2 cols) + Right (1 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Column - Charts & Tables */}
            <div className="lg:col-span-2 space-y-6">

              {/* Sale Metrics 2024 vs 2025 */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Sale Metrics 2024 vs. 2025</h2>
                  <div className="bg-base-200 rounded-box h-52 flex items-center justify-center">
                    <span className="text-base-content/40">Chart Placeholder</span>
                  </div>
                </div>
              </div>

              {/* Customer Acquisition */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <h2 className="card-title">Customer Acquisition</h2>
                      <p className="text-base-content/60 text-sm">2016</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold">1175</div>
                        <div className="text-xs text-base-content/60">Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">$1,803K</div>
                        <div className="text-xs text-base-content/60">Acquisition Cost</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-base-200 rounded-box h-40 flex items-center justify-center">
                    <span className="text-base-content/40">Chart Placeholder</span>
                  </div>
                </div>
              </div>

              {/* Customer Deals Table */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h2 className="card-title">Customer Deals</h2>
                    <button className="btn btn-ghost btn-sm">Make a Deal</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Customer</th>
                          <th>Value</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="font-medium">Salesforce</div>
                            <div className="text-xs text-base-content/60">
                              CRM software and applications focused on sales
                            </div>
                          </td>
                          <td>$12,500</td>
                          <td><span className="badge badge-ghost">Connected</span></td>
                          <td>Oct 12, 2026</td>
                          <td><button className="btn btn-ghost btn-sm">Chat</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-medium">Asana</div>
                            <div className="text-xs text-base-content/60">
                              Track, manage and connect your projects
                            </div>
                          </td>
                          <td>$8,200</td>
                          <td><span className="badge badge-ghost">Disconnected</span></td>
                          <td>Oct 10, 2026</td>
                          <td><button className="btn btn-ghost btn-sm">Chat</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-medium">Slack</div>
                            <div className="text-xs text-base-content/60">
                              A new way to communicate with your team
                            </div>
                          </td>
                          <td>$5,400</td>
                          <td><span className="badge badge-ghost">Connected</span></td>
                          <td>Oct 08, 2026</td>
                          <td><button className="btn btn-ghost btn-sm">Chat</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-medium">Notion</div>
                            <div className="text-xs text-base-content/60">
                              Productivity and note-taking web application
                            </div>
                          </td>
                          <td>$3,900</td>
                          <td><span className="badge badge-ghost">Disconnected</span></td>
                          <td>Oct 05, 2026</td>
                          <td><button className="btn btn-ghost btn-sm">Chat</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-medium">Hubspot</div>
                            <div className="text-xs text-base-content/60">
                              CRM platform with all software and integrations
                            </div>
                          </td>
                          <td>$6,800</td>
                          <td><span className="badge badge-ghost">Disconnected</span></td>
                          <td>Oct 01, 2026</td>
                          <td><button className="btn btn-ghost btn-sm">Chat</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Activity */}
            <div className="space-y-6">

              {/* Realtime Sales */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Realtime Sales</h2>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold">541</div>
                      <div className="stat-desc">last hour</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-base-content/60">494</div>
                      <div className="stat-desc">previous</div>
                    </div>
                  </div>
                  <div className="divider my-1"></div>
                  <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-2xl font-bold">$51,474</div>
                        <div className="stat-desc">current month</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-base-content/60">$49,162</div>
                        <div className="stat-desc">last month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Retention */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Customer Retention</h2>
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold">3.14%</div>
                    <div className="text-sm text-base-content/60 mt-1">
                      vs 2.16% last week
                    </div>
                  </div>
                </div>
              </div>

              {/* Goal Status */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Goal Status</h2>
                  <p className="text-sm text-base-content/60">
                    Nearly Finished &mdash; You&apos;ve completed 80% of yearly goal
                  </p>
                  <progress className="progress w-full" value="80" max="100"></progress>
                  <div className="stat">
                    <div className="stat-title">Budget Spent</div>
                    <div className="stat-value text-xl">$22,500 / $30,000</div>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-ghost btn-sm">Change Goal</button>
                  </div>
                </div>
              </div>

              {/* Social Acquisition */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h2 className="card-title">Social Acquisition</h2>
                  <div className="bg-base-200 rounded-box h-32 flex items-center justify-center">
                    <span className="text-base-content/40">Chart Placeholder</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>0</span>
                    <span>100</span>
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
                        <div className="font-medium">Salesforce</div>
                        <div className="text-xs text-base-content/60">
                          CRM software and applications focused on sales
                        </div>
                      </div>
                      <button className="btn btn-ghost btn-sm">Connect</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-box">
                      <div>
                        <div className="font-medium">Asana</div>
                        <div className="text-xs text-base-content/60">
                          Track, manage and connect your projects
                        </div>
                      </div>
                      <button className="btn btn-ghost btn-sm">Disconnect</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-box">
                      <div>
                        <div className="font-medium">Slack</div>
                        <div className="text-xs text-base-content/60">
                          A new way to communicate with your team
                        </div>
                      </div>
                      <button className="btn btn-ghost btn-sm">Connect</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-box">
                      <div>
                        <div className="font-medium">Notion</div>
                        <div className="text-xs text-base-content/60">
                          Productivity and note-taking web application
                        </div>
                      </div>
                      <button className="btn btn-ghost btn-sm">Disconnect</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-box">
                      <div>
                        <div className="font-medium">Hubspot</div>
                        <div className="text-xs text-base-content/60">
                          CRM platform with all software and integrations
                        </div>
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
                  <p className="text-sm text-base-content/70">
                    Make the better business analytics with Premium Dashboard
                  </p>
                  <div className="avatar-group -space-x-3">
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-base-300">
                        <span className="text-xs">A</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-base-300">
                        <span className="text-xs">B</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-base-300">
                        <span className="text-xs">C</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-base-300">
                        <span className="text-xs">D</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-actions mt-2">
                    <button className="btn w-full">Pay Monthly $29</button>
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
      <div className="drawer-side z-20">
        <label htmlFor="crm-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-64 p-4 gap-1">
          {/* Logo */}
          <li className="mb-3">
            <button className="text-lg font-bold hover:bg-transparent cursor-default">Nexus</button>
          </li>

          {/* Dashboard Section */}
          <li className="menu-title text-xs">Dashboard</li>
          <li><button>Ecommerce</button></li>
          <li><button className="menu-active">CRM</button></li>
          <li><button>Gen AI</button></li>

          {/* Agentic Hub */}
          <li className="menu-title text-xs mt-2">Agentic Hub</li>
          <li><button>Storage</button></li>

          {/* Apps Section */}
          <li className="menu-title text-xs mt-2">Apps</li>
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
          <li className="menu-title text-xs mt-2">Extras</li>
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