/**
 * Social Acquisition Card — chart placeholder with 0-100 scale.
 */
export function SocialAcquisitionCard() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300">
      <div className="card-body p-3">
        <h2 className="card-title text-sm">Social Acquisition</h2>
        <div className="bg-base-200 rounded-box h-16 flex items-center justify-center">
          <span className="text-xs text-base-content/40">Chart</span>
        </div>
        <div className="flex justify-between text-xs text-base-content/60">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
    </div>
  );
}