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
          background: "#14182A",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(47,158,110,0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(232,163,61,0.35) 0%, transparent 45%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
          <span style={{ color: "#5B8DEF" }}>ROAS</span>
          <span style={{ color: "#E9ECE7" }}>LY</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 52,
            fontWeight: 800,
            color: "#E9ECE7",
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {content.hero.headline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "rgba(233,236,231,0.7)",
            maxWidth: 850,
          }}
        >
          {content.hero.kicker}
        </div>
      </div>
    ),
    size
  );
}
