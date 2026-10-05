"use client";

export default function Content() {
  return (
    <main className="min-w-0 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 sm:mb-6">
          <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
            Overview
          </h1>
          <p className="mt-1 text-xs opacity-60 sm:text-sm">
            Welcome back to your admin dashboard.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          <div className="card border border-base-300 bg-base-100">
            <div className="card-body p-4 sm:p-5">
              <div className="text-xs opacity-60">Users</div>
              <div className="text-xl font-semibold sm:text-2xl">
                1,248
              </div>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-100">
            <div className="card-body p-4 sm:p-5">
              <div className="text-xs opacity-60">Projects</div>
              <div className="text-xl font-semibold sm:text-2xl">
                86
              </div>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-100">
            <div className="card-body p-4 sm:p-5">
              <div className="text-xs opacity-60">Revenue</div>
              <div className="text-xl font-semibold sm:text-2xl">
                $24.8K
              </div>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-100">
            <div className="card-body p-4 sm:p-5">
              <div className="text-xs opacity-60">Pending</div>
              <div className="text-xl font-semibold sm:text-2xl">
                12
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 md:mt-4 md:gap-4 xl:grid-cols-[2fr_1fr]">
          <section className="card border border-base-300 bg-base-100">
            <div className="card-body p-4 sm:p-5">
              <h2 className="text-sm font-semibold sm:text-base">
                Recent Activity
              </h2>
              <div className="mt-2 overflow-x-auto">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Action</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Created project</td>
                      <td>
                        <span className="badge badge-sm">
                          Done
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Jane Smith</td>
                      <td>Updated profile</td>
                      <td>
                        <span className="badge badge-sm">
                          Done
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Alex Lee</td>
                      <td>New request</td>
                      <td>
                        <span className="badge badge-sm">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="card border border-base-300 bg-base-100">
            <div className="card-body p-4 sm:p-5">
              <h2 className="text-sm font-semibold sm:text-base">
                Quick Actions
              </h2>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
                <button type="button" className="btn btn-sm">
                  New Project
                </button>
                <button type="button" className="btn btn-outline btn-sm">
                  Manage Users
                </button>
                <button type="button" className="btn btn-ghost btn-sm">
                  Settings
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}