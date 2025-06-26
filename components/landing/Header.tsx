'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-black text-white px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Texto */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png" // Usa tu logo aquí
            alt="Forezy Logo"
            width={123}
            height={123}
          />
          <span className="text-lg font-orbitron font-medium">Forezy</span>
        </div>

        {/* Botón Login */}
        <Link
          href="/login"
          className="px-4 py-2 border border-green-500 text-white font-orbitron text-sm rounded-md hover:bg-green-500 hover:text-black transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
