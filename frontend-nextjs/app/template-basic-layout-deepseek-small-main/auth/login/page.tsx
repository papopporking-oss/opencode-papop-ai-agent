/**
 * Login — placeholder page.
 */
export default function Page() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300 max-w-sm mx-auto">
      <div className="card-body p-4">
        <h1 className="text-lg font-bold">Login</h1>
        <p className="text-xs text-base-content/60 mb-2">Sign in to your account.</p>
        <input type="text" placeholder="Email" className="input input-xs w-full" readOnly />
        <input type="password" placeholder="Password" className="input input-xs w-full" readOnly />
        <button className="btn btn-xs w-full mt-1">Sign In</button>
      </div>
    </div>
  );
}