/**
 * Customer Retention Card — shows current retention rate vs previous week.
 */
export function CustomerRetentionCard() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300">
      <div className="card-body p-3">
        <h2 className="card-title text-sm">Customer Retention</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Current retention */}
          <div className="stat p-2 bg-base-200 rounded-box">
            <div className="stat-title text-xs">Retention</div>
            <div className="stat-value text-lg">3.14%</div>
            <div className="stat-desc text-xs text-base-content/60">current week</div>
          </div>
          {/* Previous week retention */}
          <div className="stat p-2 bg-base-200 rounded-box">
            <div className="stat-title text-xs">Last Week</div>
            <div className="stat-value text-lg text-base-content/60">2.16%</div>
            <div className="stat-desc text-xs text-base-content/60">previous</div>
          </div>
        </div>
      </div>
    </div>
  );
}