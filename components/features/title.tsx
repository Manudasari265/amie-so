import React from "react";

interface FeatureProps {
    children: React.ReactNode;
};


export const FeatureTitle = ({children} : FeatureProps) => {
    

    return (
        <p className="text-5xl py-16 font-heading text-gray-300">
            {children}
        </p>
    )
}