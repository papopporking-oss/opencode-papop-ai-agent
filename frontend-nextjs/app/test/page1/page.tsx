"use client";

export default function Page() {
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
      </div>
    </main>
  );
}