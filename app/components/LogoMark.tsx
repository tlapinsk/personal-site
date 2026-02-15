"use client";

import { useMemo, useState } from "react";

type LogoMarkProps = {
  srcCandidates: readonly string[];
  alt: string;
  size: number;
  fallbackText: string;
  className?: string;
};

export default function LogoMark({
  srcCandidates,
  alt,
  size,
  fallbackText,
  className,
}: LogoMarkProps) {
  const candidates = useMemo(
    () => srcCandidates.filter(Boolean),
    [srcCandidates],
  );

  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const fallback = useMemo(() => {
    const trimmed = fallbackText.trim();
    if (!trimmed) return "?";
    return trimmed
      .split(/\s+/)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("");
  }, [fallbackText]);

  const activeSrc = candidates[index];

  if (failed || !activeSrc) {
    return (
      <div
        aria-hidden="true"
        className={
          "grid place-items-center rounded-md bg-slate-50 ring-1 ring-border text-[11px] font-semibold text-slate-700 " +
          (className ?? "")
        }
        style={{ width: size, height: size }}
      >
        {fallback || "?"}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={activeSrc}
      src={activeSrc}
      alt={alt}
      width={size}
      height={size}
      className={"rounded-md object-cover ring-1 ring-border " + (className ?? "")}
      onError={() => {
        const nextIndex = index + 1;
        if (nextIndex < candidates.length) setIndex(nextIndex);
        else setFailed(true);
      }}
    />
  );
}
