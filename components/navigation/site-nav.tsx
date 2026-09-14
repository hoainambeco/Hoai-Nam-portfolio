"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Container } from "@/components/ui/container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { asset } from "@/lib/site";
import { cx } from "@/lib/cx";
import { profile, socials } from "@/data/profile";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

const ICONS = { github: GitHubIcon, linkedin: LinkedInIcon };

export function SiteNav() {
  const isHome = usePathname() === "/";
  const [section, setSection] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Highlight the nav item for whichever section crosses the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSection(entry.target.getAttribute("data-nav"));
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );
    document.querySelectorAll("[data-nav]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const active = isHome ? section : null;
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" onClick={close} className="py-2 font-mono text-[0.8125rem] font-medium tracking-tight text-fg">
          NHN<span className="sr-only">, {profile.name}, home</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7">
            {LINKS.map((l) => (
              <li key={l.id}>
                <Link
                  href={`/#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className={cx(
                    "text-sm transition-colors hover:text-fg",
                    active === l.id ? "text-fg underline decoration-accent underline-offset-[0.45em]" : "text-muted",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <span aria-hidden className="h-4 w-px bg-line-strong" />
          <ul className="flex items-center gap-1">
            {socials.map((s) => {
              const Icon = ICONS[s.id];
              return (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-fg"
                  >
                    <Icon className="size-4" />
                    <span className="sr-only">{s.label} (opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={menuId}
          className="-mr-2 grid size-11 place-items-center rounded-md text-fg md:hidden"
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </Container>

      <div id={menuId} hidden={!open} className="border-t border-line md:hidden">
        <Container className="pt-4 pb-8">
          <nav aria-label="Primary">
            <ul>
              {LINKS.map((l) => (
                <li key={l.id} className="border-b border-line">
                  <Link href={`/#${l.id}`} onClick={close} className="block py-3.5 text-2xl font-medium tracking-tight">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.9375rem]">
            {socials.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={asset(profile.cv)} download="Nguyen-Hoai-Nam-CV.pdf" className="link">
                Download CV
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
