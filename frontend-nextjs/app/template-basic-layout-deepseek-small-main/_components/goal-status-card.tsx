/**
 * Goal Status Card — shows progress towards yearly goal with budget tracking.
 */
export function GoalStatusCard() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300">
      <div className="card-body p-3">
        {/* Goal progress header */}
        <div className="flex items-center justify-between">
          <h2 className="card-title text-sm">Goal Status</h2>
          <span className="text-xs text-base-content/60">80%</span>
        </div>
        <progress className="progress w-full h-1.5" value="80" max="100"></progress>
        <p className="text-xs text-base-content/60">Nearly finished</p>

        <div className="divider my-0.5"></div>

        {/* Budget spent section */}
        <div className="flex items-center justify-between">
          <div className="stat-title text-xs">Budget Spent</div>
          <div className="text-sm font-semibold">$22,500 / $30,000</div>
        </div>
        <button className="btn btn-ghost btn-xs text-xs mt-1">Change Goal</button>
      </div>
    </div>
  );
}