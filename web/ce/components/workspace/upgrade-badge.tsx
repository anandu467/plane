import { FC } from "react";
// helpers
import { cn } from "@/helpers/common.helper";

type TUpgradeBadge = {
  className?: string;
  size?: "sm" | "md";
};

export const UpgradeBadge: FC<TUpgradeBadge> = (props) => {
  const { className, size = "sm" } = props;

  return (
    <div
    >
      Pro
    </div>
  );
};
