import { ImageResponse } from "next/og";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  const content = getContent(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0E1A",
          backgroundImage:
            "radial-gradient(circle at 12% 15%, rgba(59,110,246,0.5) 0%, transparent 45%), radial-gradient(circle at 88% 85%, rgba(95,227,255,0.28) 0%, transparent 45%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
          <span style={{ color: "#6E9BFF" }}>ROAS</span>
          <span style={{ color: "#FFFFFF" }}>LY</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 56,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.12,
            maxWidth: 980,
          }}
        >
          {content.hero.h1}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 880,
          }}
        >
          {content.hero.subheadline.split(". ")[0]}.
        </div>
      </div>
    ),
    size
  );
}
