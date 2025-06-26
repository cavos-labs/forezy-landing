'use client';

import { RocketIcon, StarIcon, UserIcon, ShuffleIcon } from 'lucide-react'; // puedes cambiar estos si tienes otros SVGs

export default function WhyChoose() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 pt-8 pb-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-16">
          Why Choose Forezy?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <Feature
            icon={<RocketIcon size={48} />}
            title="Easy Forecasting"
            description="Predict real events with our easy forecasting"
          />
          <Feature
            icon={<StarIcon size={48} />}
            title="Earn Rewards"
            description="Get rewarded for accurate predictions and participation"
          />
          <Feature
            icon={<UserIcon size={48} />}
            title="Build Reputation"
            description="Establish yourself as a top predictor in the community"
          />
          <Feature
            icon={<ShuffleIcon size={48} />}
            title="Decentralized"
            description="Powered by blockchain for transparency and trust"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-green-500">
        <div className="text-green-500">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold font-orbitron">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed max-w-[180px]">{description}</p>
    </div>
  );
}
