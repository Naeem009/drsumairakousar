import { ImageResponse } from "next/og";

export const size = {
  width: 300,
  height: 300,
};

export const contentType = "image/png";

export default function Icon() {
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
          color: "#0f3460",
          fontSize: 360,
          lineHeight: 1,
        }}
      >
        🧬
      </div>
    ),
    {
      ...size,
    }
  );
}
