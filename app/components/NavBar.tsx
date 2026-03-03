"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "./Avatar";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/work", label: "Work" },
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="pt-10">
      <div className="mx-auto flex max-w-[760px] items-center justify-between px-6 sm:px-8">
        <Link href="/" aria-label="Home" className="shrink-0">
          <Avatar
            srcCandidates={
              isHome ? undefined : ["/profile.jpg"]
            }
            alt="Tim Lapinskas"
            size={28}
            fallbackText="Tim Lapinskas"
            shape="rounded"
          />
        </Link>

        <nav className="flex items-center gap-6 text-[12px] text-muted">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href + "/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  "underline-offset-4 decoration-border hover:text-foreground transition " +
                  (active ? "text-foreground underline" : "")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
