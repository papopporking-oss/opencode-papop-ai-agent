import { Breadcrumbs } from "./_components/breadcrumbs";
import { CustomerAcquisitionCard } from "./_components/customer-acquisition-card";
import { CustomerDealsTable } from "./_components/customer-deals-table";
import { CustomerRetentionCard } from "./_components/customer-retention-card";
import { DetailPanel } from "./_components/detail-panel";
import { GoalStatusCard } from "./_components/goal-status-card";
import { IntegrationsCard } from "./_components/integrations-card";
import { RealtimeSalesCard } from "./_components/realtime-sales-card";
import { SaleMetricsCard } from "./_components/sale-metrics-card";
import { SocialAcquisitionCard } from "./_components/social-acquisition-card";
import { StatsOverview } from "./_components/stats-overview";
import { UpgradeCard } from "./_components/upgrade-card";

/**
 * Compact CRM Dashboard page — the default landing page.
 * Layout shell (drawer, navbar, sidebar, footer) is provided by layout.tsx.
 */
export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <StatsOverview />

      {/* Main Grid — responsive 12-column layout */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
        {/* Left Column — Charts, Tables, Detail Panel (7 cols) */}
        <div className="sm:col-span-7 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <SaleMetricsCard />
            <CustomerAcquisitionCard />
          </div>
          <CustomerDealsTable />
          <DetailPanel />
        </div>

        {/* Middle Column — Realtime Stats, Retention, Goal (3 cols) */}
        <div className="sm:col-span-3 space-y-2">
          <RealtimeSalesCard />
          <CustomerRetentionCard />
          <GoalStatusCard />
          <SocialAcquisitionCard />
        </div>

        {/* Right Column — Integrations, Upgrade, Detail Panel (2 cols) */}
        <div className="sm:col-span-2 space-y-2">
          <IntegrationsCard />
          <UpgradeCard />
          <DetailPanel />
        </div>
      </div>
    </>
  );
}