import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

async function readProfileJpegDataUrl() {
  const publicDir = path.join(process.cwd(), "public");
  const fullPath = path.join(publicDir, "profile.jpg");
  const buf = await readFile(fullPath);
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

export default async function Icon() {
  const dataUrl = await readProfileJpegDataUrl();

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
      </div>
    ),
    size,
  );
}
