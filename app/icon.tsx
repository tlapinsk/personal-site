import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

function extToMime(ext: string) {
  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
}

async function readProfileImageDataUrl() {
  const candidates = ["profile.png", "profile.jpg", "profile.jpeg", "profile.webp"];
  const publicDir = path.join(process.cwd(), "public");

  for (const filename of candidates) {
    try {
      const fullPath = path.join(publicDir, filename);
      const buf = await readFile(fullPath);
      const mime = extToMime(path.extname(filename).toLowerCase());
      const base64 = buf.toString("base64");
      return `data:${mime};base64,${base64}`;
    } catch {
      // ignore and try next candidate
    }
  }

  return null;
}

export default async function Icon() {
  const dataUrl = await readProfileImageDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        {dataUrl ? (
          <img
            src={dataUrl}
            alt=""
            width={32}
            height={32}
            style={{
              borderRadius: 9999,
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9999,
              background: "linear-gradient(135deg, #e2e8f0, #f8fafc)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#334155",
              fontSize: 12,
              fontWeight: 700,
              border: "1px solid #e5e7eb",
            }}
          >
            TL
          </div>
        )}
      </div>
    ),
    size,
  );
}
