/** Integration data for the list. */
const INTEGRATIONS = [
  { name: "Salesforce", action: "Connect" },
  { name: "Asana", action: "Disconnect" },
  { name: "Slack", action: "Connect" },
  { name: "Notion", action: "Disconnect" },
  { name: "Hubspot", action: "Disconnect" },
];

/**
 * Integrations Card — compact list of connected/disconnected services.
 */
export function IntegrationsCard() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300">
      <div className="card-body p-3">
        <h2 className="card-title text-sm">Integrations</h2>
        <div className="space-y-1">
          {INTEGRATIONS.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-1.5 bg-base-200 rounded-box"
            >
              <div className="text-xs">
                <div className="font-medium">{item.name}</div>
              </div>
              <button className="btn btn-ghost btn-xs text-xs">{item.action}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}