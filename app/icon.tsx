import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#2C5F6E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#D6EAF2",
            fontSize: 18,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          B
        </span>
      </div>
    ),
    { ...size }
  );
}
