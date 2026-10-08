/** Placeholder avatar letters for the avatar group. */
const AVATAR_LETTERS = ["A", "B", "C", "D"];

/**
 * Upgrade Card — CTA to upgrade plan with avatar group and pricing button.
 */
export function UpgradeCard() {
  return (
    <div className="card card-sm bg-base-200 border border-base-300">
      <div className="card-body p-3">
        <h2 className="card-title text-sm">Upgrade your plan</h2>
        <p className="text-xs text-base-content/70">
          Save 30% with Premium Dashboard
        </p>

        {/* Placeholder avatar group */}
        <div className="avatar-group -space-x-2">
          {AVATAR_LETTERS.map((letter) => (
            <div key={letter} className="avatar placeholder">
              <div className="w-6 rounded-full bg-base-300">
                <span className="text-xs">{letter}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-xs w-full text-xs mt-1">Pay $29/mo</button>
      </div>
    </div>
  );
}