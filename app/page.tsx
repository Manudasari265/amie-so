"use client";

import { FeatureCard } from "@/components/features/card";
import { FeatureTitle } from "@/components/features/title";
import { Hero } from "@/components/ui/hero";

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
  },
  {
    title: "Color your calendar to organize",
    id: "colors",   
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
  },
  {
    title: "Track what you listened to when",
    id: "music",
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
  },
  {
    title: "Always know what your team is up to",
    id: "team",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      <div className="flex w-full gap-20 items-start border-red-200 border-4">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle>
                  {feature.title}
                </FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen items-center w-full">
          <div className="w-full aspect-square rounded-2xl bg-gray-200">
            <FeatureCard gradient="from-[#f7f0ff] to-[#a78afe]" />
          </div>
        </div>
      </div>
      <div className="h-screen">
        More room to scroll
      </div>
    </div>
  );
}
