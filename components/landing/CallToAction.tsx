'use client';

export default function CallToAction() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center z-10 relative">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">
          Ready to forecast your future?
        </h2>

        {/* Subtítulo */}
        <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
          Be part of the first wave of chain predictors.
          <br />
          No wallet needed to join the waitlist.
        </p>

        {/* Botón */}
        <button
        onClick={() => {
          const heroSection = document.getElementById('hero');
          heroSection?.scrollIntoView({ behavior: 'smooth' });
        }} 
        className="px-6 py-3 rounded-md border border-green-500 text-white font-medium font-orbitron shadow-[0_0_15px_#00ff99] hover:shadow-[0_0_25px_#00ff99] transition duration-200">
          Get Early Access
        </button>
      </div>
    </section>
  );
}
