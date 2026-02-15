"use client";

import { useEffect, useMemo, useState } from "react";

type AvatarProps = {
  src?: string;
  srcCandidates?: string[];
  alt: string;
  size: number;
  fallbackText: string;
  shape?: "circle" | "rounded";
  className?: string;
};

export default function Avatar({
  src,
  srcCandidates,
  alt,
  size,
  fallbackText,
  shape = "circle",
  className,
}: AvatarProps) {
  const candidates = useMemo(() => {
    const list = srcCandidates?.length
      ? srcCandidates
      : src
        ? [src]
        : [];
    return list.filter(Boolean);
  }, [src, srcCandidates]);

  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!failed) return;
    const id = window.setTimeout(() => {
      setIndex(0);
      setFailed(false);
    }, 2500);
    return () => window.clearTimeout(id);
  }, [failed]);

  const fallback = useMemo(() => {
    const trimmed = fallbackText.trim();
    if (!trimmed) return "?";
    const parts = trimmed.split(/\s+/).slice(0, 2);
    return parts.map((p) => p[0]?.toUpperCase()).join("") || "?";
  }, [fallbackText]);

  const activeSrc = candidates[index];
  const rounding = shape === "rounded" ? "rounded-2xl" : "rounded-full";

  if (failed || !activeSrc) {
    return (
      <div
        aria-hidden="true"
        className={
          "grid place-items-center " +
          rounding +
          " bg-gradient-to-br from-slate-200 to-slate-50 ring-1 ring-border text-[11px] font-semibold text-slate-700 " +
          (className ?? "")
        }
        style={{ width: size, height: size }}
      >
        {fallback}
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
      className={rounding + " object-cover ring-1 ring-border " + (className ?? "")}
      onError={() => {
        const nextIndex = index + 1;
        if (nextIndex < candidates.length) setIndex(nextIndex);
        else setFailed(true);
      }}
    />
  );
}
