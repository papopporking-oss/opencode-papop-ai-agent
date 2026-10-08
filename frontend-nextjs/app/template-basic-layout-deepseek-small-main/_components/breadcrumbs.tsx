import Link from "next/link";

/**
 * Breadcrumbs — compact navigation breadcrumb trail with client-side navigation.
 */
export function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-xs py-0">
      <ul>
        <li><Link href="/template-basic-layout-deepseek-small-main" className="link link-hover text-xs">Nexus</Link></li>
        <li><Link href="/template-basic-layout-deepseek-small-main/dashboards/ecommerce" className="link link-hover text-xs">Dashboards</Link></li>
        <li className="font-medium text-xs">CRM</li>
      </ul>
    </div>
  );
}