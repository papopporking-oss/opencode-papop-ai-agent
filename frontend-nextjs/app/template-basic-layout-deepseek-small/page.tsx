export default function Page() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="crm-drawer-sm" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar — compact */}
        <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-10 min-h-0 py-1">
          <div className="navbar-start">
            <label htmlFor="crm-drawer-sm" className="btn btn-ghost btn-xs drawer-button lg:hidden">
              Menu
            </label>
            <span className="text-sm font-semibold ml-1">CRM</span>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div role="tablist" className="tabs tabs-box tabs-sm">
              <button role="tab" className="tab tab-active text-xs">Overview</button>
              <button role="tab" className="tab text-xs">Analytics</button>
              <button role="tab" className="tab text-xs">Reports</button>
              <button role="tab" className="tab text-xs">Settings</button>
            </div>
          </div>
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
                <li><button className="text-xs">View Profile</button></li>
                <li><button className="text-xs">Team</button></li>
                <li><button className="text-xs">Invites</button></li>
                <li className="menu-title text-xs">Platform</li>
                <li><button className="text-xs">Settings</button></li>
                <li><button className="text-xs">Billing</button></li>
                <li><button className="text-xs">Support</button></li>
                <div className="divider my-0"></div>
                <li><button className="text-xs">Sign Out</button></li>
              </ul>
            </details>
          </div>
        </div>

        {/* Page Content — compact padding */}
        <div className="flex-1 p-2 lg:p-3 space-y-2">

          {/* Breadcrumbs — compact */}
          <div className="breadcrumbs text-xs py-0">
            <ul>
              <li><button className="link link-hover text-xs">Nexus</button></li>
              <li><button className="link link-hover text-xs">Dashboards</button></li>
              <li className="font-medium text-xs">CRM</li>
            </ul>
          </div>

          {/* Stats Overview — compact horizontal stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div className="stat bg-base-100 border border-base-300 rounded-box p-2">
              <div className="stat-title text-xs">Customers</div>
              <div className="stat-value text-lg">4,235</div>
              <div className="stat-desc text-xs text-base-content/60">+8.04%</div>
            </div>
            <div className="stat bg-base-100 border border-base-300 rounded-box p-2">
              <div className="stat-title text-xs">Revenue</div>
              <div className="stat-value text-lg">$75.4K</div>
              <div className="stat-desc text-xs text-base-content/60">+15.3%</div>
            </div>
            <div className="stat bg-base-100 border border-base-300 rounded-box p-2">
              <div className="stat-title text-xs">Deals</div>
              <div className="stat-value text-lg">574</div>
              <div className="stat-desc text-xs text-base-content/60">-2.4%</div>
            </div>
            <div className="stat bg-base-100 border border-base-300 rounded-box p-2">
              <div className="stat-title text-xs">Satisfaction</div>
              <div className="stat-value text-lg">93%</div>
              <div className="stat-desc text-xs text-base-content/60">+2.3%</div>
            </div>
          </div>

          {/* Main Grid — compact 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">

            {/* Left — Charts & Tables (7 cols) */}
            <div className="sm:col-span-7 space-y-2">

              {/* Sale Metrics + Customer Acquisition — side by side in 2col */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="card card-sm bg-base-100 border border-base-300">
                  <div className="card-body p-3">
                    <h2 className="card-title text-sm">Sale Metrics 2024 vs 2025</h2>
                    <div className="bg-base-200 rounded-box h-24 flex items-center justify-center">
                      <span className="text-xs text-base-content/40">Chart</span>
                    </div>
                  </div>
                </div>
                <div className="card card-sm bg-base-100 border border-base-300">
                  <div className="card-body p-3">
                    <h2 className="card-title text-sm">Customer Acquisition</h2>
                    <div className="flex justify-between mb-1">
                      <div>
                        <div className="text-base font-bold">1175</div>
                        <div className="text-xs text-base-content/60">Customers</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-bold">$1,803K</div>
                        <div className="text-xs text-base-content/60">Cost</div>
                      </div>
                    </div>
                    <div className="bg-base-200 rounded-box h-16 flex items-center justify-center">
                      <span className="text-xs text-base-content/40">Chart</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Deals Table — compact */}
              <div className="card card-sm bg-base-100 border border-base-300">
                <div className="card-body p-3">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="card-title text-sm">Customer Deals</h2>
                    <button className="btn btn-ghost btn-xs text-xs">Make Deal</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table table-sm table-zebra">
                      <thead>
                        <tr>
                          <th className="text-xs">Customer</th>
                          <th className="text-xs">Value</th>
                          <th className="text-xs">Status</th>
                          <th className="text-xs">Date</th>
                          <th className="text-xs">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr>
                          <td>
                            <div className="font-medium text-xs">Salesforce</div>
                            <div className="text-xs text-base-content/60">CRM software & apps</div>
                          </td>
                          <td>$12.5K</td>
                          <td><span className="badge badge-ghost badge-xs text-xs">Connected</span></td>
                          <td>Oct 12</td>
                          <td><button className="btn btn-ghost btn-xs text-xs">Chat</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-medium text-xs">Asana</div>
                            <div className="text-xs text-base-content/60">Track & manage projects</div>
                          </td>
                          <td>$8.2K</td>
                          <td><span className="badge badge-ghost badge-xs text-xs">Disconnected</span></td>
                          <td>Oct 10</td>
                          <td><button className="btn btn-ghost btn-xs text-xs">Chat</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-medium text-xs">Slack</div>
                            <div className="text-xs text-base-content/60">Team communication</div>
                          </td>
                          <td>$5.4K</td>
                          <td><span className="badge badge-ghost badge-xs text-xs">Connected</span></td>
                          <td>Oct 08</td>
                          <td><button className="btn btn-ghost btn-xs text-xs">Chat</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-medium text-xs">Notion</div>
                            <div className="text-xs text-base-content/60">Productivity web app</div>
                          </td>
                          <td>$3.9K</td>
                          <td><span className="badge badge-ghost badge-xs text-xs">Disconnected</span></td>
                          <td>Oct 05</td>
                          <td><button className="btn btn-ghost btn-xs text-xs">Chat</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-medium text-xs">Hubspot</div>
                            <div className="text-xs text-base-content/60">CRM platform & tools</div>
                          </td>
                          <td>$6.8K</td>
                          <td><span className="badge badge-ghost badge-xs text-xs">Disconnected</span></td>
                          <td>Oct 01</td>
                          <td><button className="btn btn-ghost btn-xs text-xs">Chat</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Detail Panel — empty space for detailed data */}
              <div className="card card-sm bg-base-100 border border-base-300 border-dashed">
                <div className="card-body p-3">
                  <h2 className="card-title text-sm text-base-content/50">Detail Panel</h2>
                  <div className="bg-base-200/50 rounded-box h-32 flex items-center justify-center">
                    <span className="text-xs text-base-content/30">Space for detailed data</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle — Realtime + Retention + Goal (3 cols) */}
            <div className="sm:col-span-3 space-y-2">

              {/* Realtime Sales + Revenue — compact */}
              <div className="card card-sm bg-base-100 border border-base-300">
                <div className="card-body p-3">
                  <h2 className="card-title text-sm">Realtime Sales</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="stat p-2 bg-base-200 rounded-box">
                      <div className="stat-title text-xs">Sales</div>
                      <div className="stat-value text-lg">541</div>
                      <div className="stat-desc text-xs text-base-content/60">last hour</div>
                      <div className="text-xs text-base-content/50 mt-0.5">Prev: 494</div>
                    </div>
                    <div className="stat p-2 bg-base-200 rounded-box">
                      <div className="stat-title text-xs">Revenue</div>
                      <div className="stat-value text-lg">$51.5K</div>
                      <div className="stat-desc text-xs text-base-content/60">this month</div>
                      <div className="text-xs text-base-content/50 mt-0.5">Prev: $49.2K</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Retention — compact */}
              <div className="card card-sm bg-base-100 border border-base-300">
                <div className="card-body p-3">
                  <h2 className="card-title text-sm">Customer Retention</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="stat p-2 bg-base-200 rounded-box">
                      <div className="stat-title text-xs">Retention</div>
                      <div className="stat-value text-lg">3.14%</div>
                      <div className="stat-desc text-xs text-base-content/60">current week</div>
                    </div>
                    <div className="stat p-2 bg-base-200 rounded-box">
                      <div className="stat-title text-xs">Last Week</div>
                      <div className="stat-value text-lg text-base-content/60">2.16%</div>
                      <div className="stat-desc text-xs text-base-content/60">previous</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goal Status + Budget — compact */}
              <div className="card card-sm bg-base-100 border border-base-300">
                <div className="card-body p-3">
                  <div className="flex items-center justify-between">
                    <h2 className="card-title text-sm">Goal Status</h2>
                    <span className="text-xs text-base-content/60">80%</span>
                  </div>
                  <progress className="progress w-full h-1.5" value="80" max="100"></progress>
                  <p className="text-xs text-base-content/60">Nearly finished</p>
                  <div className="divider my-0.5"></div>
                  <div className="flex items-center justify-between">
                    <div className="stat-title text-xs">Budget Spent</div>
                    <div className="text-sm font-semibold">$22,500 / $30,000</div>
                  </div>
                  <button className="btn btn-ghost btn-xs text-xs mt-1">Change Goal</button>
                </div>
              </div>

              {/* Social Acquisition — compact */}
              <div className="card card-sm bg-base-100 border border-base-300">
                <div className="card-body p-3">
                  <h2 className="card-title text-sm">Social Acquisition</h2>
                  <div className="bg-base-200 rounded-box h-16 flex items-center justify-center">
                    <span className="text-xs text-base-content/40">Chart</span>
                  </div>
                  <div className="flex justify-between text-xs text-base-content/60">
                    <span>0</span>
                    <span>100</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right — Integrations + Upgrade (2 cols) */}
            <div className="sm:col-span-2 space-y-2">

              {/* Integrations — compact list */}
              <div className="card card-sm bg-base-100 border border-base-300">
                <div className="card-body p-3">
                  <h2 className="card-title text-sm">Integrations</h2>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-1.5 bg-base-200 rounded-box">
                      <div className="text-xs">
                        <div className="font-medium">Salesforce</div>
                      </div>
                      <button className="btn btn-ghost btn-xs text-xs">Connect</button>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-base-200 rounded-box">
                      <div className="text-xs">
                        <div className="font-medium">Asana</div>
                      </div>
                      <button className="btn btn-ghost btn-xs text-xs">Disconnect</button>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-base-200 rounded-box">
                      <div className="text-xs">
                        <div className="font-medium">Slack</div>
                      </div>
                      <button className="btn btn-ghost btn-xs text-xs">Connect</button>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-base-200 rounded-box">
                      <div className="text-xs">
                        <div className="font-medium">Notion</div>
                      </div>
                      <button className="btn btn-ghost btn-xs text-xs">Disconnect</button>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-base-200 rounded-box">
                      <div className="text-xs">
                        <div className="font-medium">Hubspot</div>
                      </div>
                      <button className="btn btn-ghost btn-xs text-xs">Disconnect</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upgrade — compact */}
              <div className="card card-sm bg-base-200 border border-base-300">
                <div className="card-body p-3">
                  <h2 className="card-title text-sm">Upgrade your plan</h2>
                  <p className="text-xs text-base-content/70">
                    Save 30% with Premium Dashboard
                  </p>
                  <div className="avatar-group -space-x-2">
                    <div className="avatar placeholder">
                      <div className="w-6 rounded-full bg-base-300">
                        <span className="text-xs">A</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-6 rounded-full bg-base-300">
                        <span className="text-xs">B</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-6 rounded-full bg-base-300">
                        <span className="text-xs">C</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-6 rounded-full bg-base-300">
                        <span className="text-xs">D</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-xs w-full text-xs mt-1">Pay $29/mo</button>
                </div>
              </div>

              {/* Detail Panel — extra empty space for detailed data */}
              <div className="card card-sm bg-base-100 border border-base-300 border-dashed">
                <div className="card-body p-3">
                  <h2 className="card-title text-sm text-base-content/50">Detail Panel</h2>
                  <div className="bg-base-200/50 rounded-box h-20 flex items-center justify-center">
                    <span className="text-xs text-base-content/30">Space for detailed data</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer — compact */}
        <footer className="footer footer-center py-1.5 border-t border-base-300 bg-base-100 text-xs text-base-content/60">
          <aside>
            <p>Built with care by Denish</p>
          </aside>
        </footer>
      </div>

      {/* Sidebar — compact narrow */}
      <div className="drawer-side z-20">
        <label htmlFor="crm-drawer-sm" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-48 p-2 gap-0.5 text-sm">
          {/* Logo */}
          <li className="mb-1">
            <button className="text-sm font-bold hover:bg-transparent cursor-default p-2">Nexus</button>
          </li>

          {/* Dashboard Section */}
          <li className="menu-title text-xs">Dashboard</li>
          <li><button className="text-xs">Ecommerce</button></li>
          <li><button className="menu-active text-xs">CRM</button></li>
          <li><button className="text-xs">Gen AI</button></li>

          {/* Agentic Hub */}
          <li className="menu-title text-xs mt-1">Agentic Hub</li>
          <li><button className="text-xs">Storage</button></li>

          {/* Apps Section */}
          <li className="menu-title text-xs mt-1">Apps</li>
          <li>
            <details>
              <summary className="text-xs">Ecommerce</summary>
              <ul>
                <li><button className="text-xs">Orders</button></li>
                <li><button className="text-xs">Products</button></li>
                <li><button className="text-xs">Customers</button></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-xs">Gen AI</summary>
              <ul>
                <li><button className="text-xs">Home</button></li>
                <li><button className="text-xs">Content</button></li>
                <li><button className="text-xs">Images</button></li>
                <li><button className="text-xs">Library</button></li>
              </ul>
            </details>
          </li>
          <li><button className="text-xs">File Manager</button></li>
          <li><button className="text-xs">Chat</button></li>

          {/* Extras Section */}
          <li className="menu-title text-xs mt-1">Extras</li>
          <li>
            <details>
              <summary className="text-xs">Auth</summary>
              <ul>
                <li><button className="text-xs">Login</button></li>
                <li><button className="text-xs">Register</button></li>
                <li><button className="text-xs">Forgot Password</button></li>
                <li><button className="text-xs">Reset Password</button></li>
              </ul>
            </details>
          </li>
          <li><button className="text-xs">Settings</button></li>
          <li><button className="text-xs">Get Help</button></li>
        </ul>
      </div>
    </div>
  );
}