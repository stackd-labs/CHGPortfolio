import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chanel Hicks-Gray | AI Architect & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafaf8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#E8B84B",
          }}
        />

        {/* Rose left accent */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 80,
            width: 3,
            height: 80,
            background: "#C4547A",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: 22,
            color: "#E8B84B",
            letterSpacing: "0.18em",
            marginBottom: 32,
            marginLeft: 24,
          }}
        >
          CHANEL HICKS-GRAY
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: 72,
            fontWeight: 600,
            color: "#2c2c2c",
            lineHeight: 1.0,
            marginLeft: 24,
            marginBottom: 40,
          }}
        >
          I build your app.
          <br />
          {" "}
          <span style={{ color: "#C4547A" }}>Or I rescue it.</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 64,
            height: 1,
            background: "#E8B84B",
            marginLeft: 24,
            marginBottom: 32,
          }}
        />

        {/* Sub */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 24,
            color: "#6b6460",
            fontWeight: 300,
            marginLeft: 24,
          }}
        >
          AI Architect · Builder · App Rescue
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontFamily: "sans-serif",
            fontSize: 16,
            color: "#E8B84B",
            letterSpacing: "0.12em",
          }}
        >
          STACKDSTUDIOSAI.COM
        </div>
      </div>
    ),
    { ...size }
  );
}
