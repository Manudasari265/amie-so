"use client";

import classNames from "classnames";
import React from "react";

interface FeatureCardProps {
    gradient: string;
    children: React.ReactNode
}

export const FeatureCard = ({gradient, children} : FeatureCardProps) => {
    return <div className={classNames(
        "h-full w-full rounded-2xl bg-gradient-to-br",
        gradient
      )}
    >
        {children}
    </div>
}