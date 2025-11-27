export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import OrderClient from "./orderClient";

export default function Page() {
  return <OrderClient />;
}
