'use client';

import Image from 'next/image';
import { FaDiscord, FaXTwitter, FaTelegram, FaGithub } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 pt-12 pb-6">
        {/* ✅ Línea superior */}
        <div className="w-[90%] md:w-[75%] h-[1.42px] bg-green-500 opacity-30 mx-auto mt-20" />

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between mb-6">
            {/* Logo */}
            <div>
            <Image
                src="/images/logo.png"
                alt="Forezy Logo"
                width={186}
                height={186}
                className="object-contain"
            />
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://discord.gg/XFVpFrx9H4"
                aria-label="Join our Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <FaDiscord />
                </IconWrapper>
              </a>
              <a
                href="https://x.com/forezyxyz"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <FaXTwitter />
                </IconWrapper>
              </a>
              <a
                href=""
                aria-label="Join our Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <FaTelegram />
                </IconWrapper>
              </a>
              <a
                href="https://github.com/cavos-labs/forezy-web"
                aria-label="Visit our GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <FaGithub />
                </IconWrapper>
              </a>
            </div>
          </div>

        {/* Línea inferior */}
        <div className="w-[90%] md:w-[75%] h-[0.71px] opacity-20 bg-green-500 opacity-30 mx-auto mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
            Copyright © 2025 • <span className="text-white">Forezy</span>.
        </div>
    </footer>
  );
}

// Componente auxiliar para los íconos
function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[50px] h-[50px] flex items-center justify-center text-white text-[50px] hover:text-green-400 transition">
      {children}
    </div>
  );
}
