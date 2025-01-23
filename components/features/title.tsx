"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import classnames from "classnames";

interface FeatureProps {
    children: React.ReactNode;
};


export const FeatureTitle = ({children} : FeatureProps) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});

    console.log(isInView, children);

    return (
        <p 
          ref={ref}
          className={classnames(
               "text-5xl py-16 font-heading transition-colors",
               isInView ? "text-black" : "text-gray-300"
            )}
        >
            {children}
        </p>
    )
}