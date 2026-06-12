"use client";

import { Code2, Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-footer px-6 pb-8 pt-12">
      <div className="section-container">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">
              Recovery Energy Grid
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Цифровий двійник для захисту енергосистеми України
            </p>
          </div>
          <div className="text-sm text-text-secondary">
            <p className="mb-2">
              <span className="text-text-primary">Email:</span>{" "}
              <a
                href="mailto:recovery@energygrid.ua"
                className="transition-colors hover:text-neon"
              >
                recovery@energygrid.ua
              </a>
            </p>
            <p className="mb-2">
              <span className="text-text-primary">Телефон:</span>{" "}
              <a
                href="tel:+380441234567"
                className="transition-colors hover:text-neon"
              >
                +38 044 123 4567
              </a>
            </p>
            <p>
              <span className="text-text-primary">Telegram:</span>{" "}
              <a
                href="https://t.me/RecoveryGridBot"
                className="transition-colors hover:text-neon"
                target="_blank"
                rel="noopener noreferrer"
              >
                @RecoveryGridBot
              </a>
            </p>
          </div>
          <div className="flex items-start gap-4 md:justify-end">
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="text-text-secondary transition-colors hover:text-neon"
            >
              <Code2 className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-text-secondary transition-colors hover:text-neon"
            >
              <Share2 className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-text-secondary transition-colors hover:text-neon"
            >
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-center text-xs text-text-secondary">
          © 2026 ХАКАТОН | Відновлення енергетики
        </p>
      </div>
    </footer>
  );
}
