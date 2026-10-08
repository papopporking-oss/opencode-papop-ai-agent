/** Deals data for the table rows. */
const DEALS = [
  { customer: "Salesforce", desc: "CRM software & apps", value: "$12.5K", status: "Connected", date: "Oct 12" },
  { customer: "Asana", desc: "Track & manage projects", value: "$8.2K", status: "Disconnected", date: "Oct 10" },
  { customer: "Slack", desc: "Team communication", value: "$5.4K", status: "Connected", date: "Oct 08" },
  { customer: "Notion", desc: "Productivity web app", value: "$3.9K", status: "Disconnected", date: "Oct 05" },
  { customer: "Hubspot", desc: "CRM platform & tools", value: "$6.8K", status: "Disconnected", date: "Oct 01" },
];

/**
 * Customer Deals Table — compact data table showing deals with status badges and actions.
 */
export function CustomerDealsTable() {
  return (
    <div className="card card-sm bg-base-100 border border-base-300">
      <div className="card-body p-3">
        {/* Header with action button */}
        <div className="flex items-center justify-between mb-1">
          <h2 className="card-title text-sm">Customer Deals</h2>
          <button className="btn btn-ghost btn-xs text-xs">Make Deal</button>
        </div>

        {/* Scrollable table container */}
        <div className="overflow-x-auto">
          <table className="table table-sm table-zebra">
            <thead>
              <tr>
                <th className="text-xs">Customer</th>
                <th className="text-xs">Value</th>
                <th className="text-xs">Status</th>
                <th className="text-xs">Date</th>
                <th className="text-xs">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {DEALS.map((deal) => (
                <tr key={deal.customer}>
                  <td>
                    <div className="font-medium text-xs">{deal.customer}</div>
                    <div className="text-xs text-base-content/60">{deal.desc}</div>
                  </td>
                  <td>{deal.value}</td>
                  <td><span className="badge badge-ghost badge-xs text-xs">{deal.status}</span></td>
                  <td>{deal.date}</td>
                  <td><button className="btn btn-ghost btn-xs text-xs">Chat</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}