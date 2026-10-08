/**
 * Detail Panel — empty placeholder area for future detailed data content.
 * Uses dashed border to visually distinguish it as a reserved space.
 */
export function DetailPanel() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300 border-dashed">
      <div className="card-body p-3">
        <h2 className="card-title text-sm text-base-content/50">Detail Panel</h2>
        <div className="bg-base-200/50 rounded-box h-32 flex items-center justify-center">
          <span className="text-xs text-base-content/30">Space for detailed data</span>
        </div>
      </div>
    </div>
  );
}