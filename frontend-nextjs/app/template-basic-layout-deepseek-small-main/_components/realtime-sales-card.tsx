/**
 * Realtime Sales Card — shows current sales and revenue metrics vs previous period.
 */
export function RealtimeSalesCard() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300">
      <div className="card-body p-3">
        <h2 className="card-title text-sm">Realtime Sales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Sales stat */}
          <div className="stat p-2 bg-base-200 rounded-box">
            <div className="stat-title text-xs">Sales</div>
            <div className="stat-value text-lg">541</div>
            <div className="stat-desc text-xs text-base-content/60">last hour</div>
            <div className="text-xs text-base-content/50 mt-0.5">Prev: 494</div>
          </div>
          {/* Revenue stat */}
          <div className="stat p-2 bg-base-200 rounded-box">
            <div className="stat-title text-xs">Revenue</div>
            <div className="stat-value text-lg">$51.5K</div>
            <div className="stat-desc text-xs text-base-content/60">this month</div>
            <div className="text-xs text-base-content/50 mt-0.5">Prev: $49.2K</div>
          </div>
        </div>
      </div>
    </div>
  );
}