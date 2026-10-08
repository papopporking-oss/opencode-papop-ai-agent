/**
 * Forgot Password — placeholder page.
 */
export default function Page() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300 max-w-sm mx-auto">
      <div className="card-body p-4">
        <h1 className="text-lg font-bold">Forgot Password</h1>
        <p className="text-xs text-base-content/60 mb-2">Enter your email to reset your password.</p>
        <input type="email" placeholder="Email" className="input input-xs w-full" readOnly />
        <button className="btn btn-xs w-full mt-1">Send Reset Link</button>
      </div>
    </div>
  );
}