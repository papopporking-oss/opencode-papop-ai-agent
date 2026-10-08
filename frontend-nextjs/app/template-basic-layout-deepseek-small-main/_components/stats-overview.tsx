/**
 * Stats Overview — 4 key metric cards in a responsive grid.
 * Displays Customers, Revenue, Deals, and Satisfaction.
 */
export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {/* Customers */}
      <div className="stat bg-base-100 border border-base-300 rounded-box p-2">
        <div className="stat-title text-xs">Customers</div>
        <div className="stat-value text-lg">4,235</div>
        <div className="stat-desc text-xs text-base-content/60">+8.04%</div>
      </div>

      {/* Revenue */}
      <div className="stat bg-base-100 border border-base-300 rounded-box p-2">
        <div className="stat-title text-xs">Revenue</div>
        <div className="stat-value text-lg">$75.4K</div>
        <div className="stat-desc text-xs text-base-content/60">+15.3%</div>
      </div>

      {/* Deals */}
      <div className="stat bg-base-100 border border-base-300 rounded-box p-2">
        <div className="stat-title text-xs">Deals</div>
        <div className="stat-value text-lg">574</div>
        <div className="stat-desc text-xs text-base-content/60">-2.4%</div>
      </div>

      {/* Satisfaction */}
      <div className="stat bg-base-100 border border-base-300 rounded-box p-2">
        <div className="stat-title text-xs">Satisfaction</div>
        <div className="stat-value text-lg">93%</div>
        <div className="stat-desc text-xs text-base-content/60">+2.3%</div>
      </div>
    </div>
  );
}