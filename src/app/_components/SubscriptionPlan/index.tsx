import React from 'react';
import StarterCard from './StarterCard';
import GrowthCard from './GrowthCard';

const SubscriptionPlan = () => {
  return (
    <section className="bg-white py-24 sm:py-40">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 sm:px-8">
        <span className="text-center text-4xl font-bold whitespace-pre-line text-black md:text-5xl">
          Subscription Plan
        </span>

        <div className="h-16" />

        <div className="grid w-full grid-cols-12 gap-6">
          <StarterCard />
          <GrowthCard />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
