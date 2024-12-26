import { useState } from "react";
import { observer } from "mobx-react";
// ui
import { Button, Tooltip } from "@plane/ui";
// hooks
import { usePlatformOS } from "@/hooks/use-platform-os";
// assets
import packageJson from "package.json";
// local components
import { PaidPlanUpgradeModal } from "./upgrade";

export const WorkspaceEditionBadge = observer(() => {
  const { isMobile } = usePlatformOS();
  // states
  const [isPaidPlanPurchaseModalOpen, setIsPaidPlanPurchaseModalOpen] = useState(false);

  return (
    <>

    </>
  );
});
