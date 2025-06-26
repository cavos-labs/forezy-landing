// app/components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-12 py-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left */}
        <div className="flex flex-col max-w-xl">

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-orbitron mt-10">
            Forecast the <br /> Future. Earn <br /> Rewards.
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 mb-8">
            The easiest way to predict real-world events, earn rewards and build your prediction reputation.
          </p>

          {/* Waitlist Form */}
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-3 rounded-l-md bg-black border border-gray-600 text-white focus:outline-none"
            />
            <button className="px-6 py-3 rounded-md border border-green-500 text-white font-medium font-orbitron shadow-[0_0_15px_#00ff99] hover:shadow-[0_0_25px_#00ff99] transition duration-200 ml-4">
              Join Waitlist
            </button>
          </form>
        </div>

        {/* Right */}
        <div className="w-[372px] h-[372px] relative mt-24">
          <Image
            src="/images/bubble.png"
            alt="Visual orb"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
