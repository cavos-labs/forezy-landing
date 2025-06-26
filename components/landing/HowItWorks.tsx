'use client';

export default function HowItWorks() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 pt-16 pb-20 mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
          <Step
            number="1"
            title="Make Predictions"
            description="Browse events and make your forecasts on events you believe in"
          />
          <Step
            number="2"
            title="Track Performance"
            description="Monitor your predictions and see how you compare up against others"
          />
          <Step
            number="3"
            title="Earn & Grow"
            description="Collect rewards for accurate predictions and build your reputation"
          />
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      {/* Green Circle */}
      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-2xl md:text-3xl font-orbitron">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold font-orbitron">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
        {description}
      </p>
    </div>
  );
}
