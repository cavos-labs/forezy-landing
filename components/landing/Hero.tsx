'use client';

import Image from 'next/image';
import { useState } from 'react';
import { joinWaitlist } from '../../app/actions';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError(null);
    
    const result = await joinWaitlist(email);

    if (result.error) {
      setError(result.error);
    } else {
      setIsSubmitted(true);
    }
    
    setIsLoading(false);
  };
  

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
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 rounded-l-md bg-black border border-gray-600 text-white focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-r-md border border-green-500 text-white font-medium font-orbitron shadow-[0_0_15px_#00ff99] hover:shadow-[0_0_25px_#00ff99] transition duration-200 ml-4"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                ) : (
                  <>
                    Join Waitlist
                  </>
                )}
              </button>
              {error && <p className="text-sm text-red-500 mt-2 absolute left-0 -bottom-6">{error}</p>}
            </form>
          ) : (
            <p className="text-green-400 font-semibold mt-4">
              ✅ You&apos;re on the waitlist! We&apos;ll notify you at <strong>{email}</strong>.
            </p>
          )}
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
