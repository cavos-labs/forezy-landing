'use client';

export default function Roadmap() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 pt-12 pb-32 relative mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-20">Roadmap</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <RoadmapItem
            title="Early Whitelist"
            subtitle="Now Live"
            description="Get early access to test the first version of the app. Spots are limited – early users help shape what’s next."
          />
          <RoadmapItem
            title="Q2 2025"
            subtitle="MVP Launch + Feedback Loop"
            description="We’re rolling out the basic prediction flow with select markets. Early adopters can forecast, give feedback, and earn exclusive rewards."
          />
          <RoadmapItem
            title="Q3 2025"
            subtitle="Iteration & Market Expansion"
            description="Based on user input, we’ll expand market categories, improve UX, and experiment with lightweight incentives."
          />
        </div>
      </div>
      {/* Línea base */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-screen h-[2px] bg-green-500 z-0 shadow-[0px_0px_25px_#62e977]" />
    </section>
  );
}

function RoadmapItem({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Texto */}
      <div className="mb-28 max-w-xl">
        <h3 className="text-lg font-semibold font-orbitron">{title}</h3>
        <p className="text-green-500 font-medium font-orbitron">{subtitle}</p>
        <p className="text-sm text-gray-400 leading-relaxed mt-2">
          {description}
        </p>
      </div>

      {/* Punto y línea vertical */}
      <div className="absolute bottom-0 flex flex-col items-center z-10 mt-10">
        <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0px_0px_16px_#62e977]" />
        <div className="w-[2px] h-20 bg-green-500 shadow-[0px_0px_16px_#62e977]" />
      </div>
    </div>
  );
}
