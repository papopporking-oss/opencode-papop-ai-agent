/**
 * Customer Acquisition Card — shows customer count and acquisition cost with chart placeholder.
 */
export function CustomerAcquisitionCard() {
  return (
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
  );
}