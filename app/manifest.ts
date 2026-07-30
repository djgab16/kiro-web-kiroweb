import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kiro Hub",
    short_name: "Kiro Hub",
    description:
      "Learn, build, and collaborate with Kiro. The AI-powered development community for modern developers seeking to amplify their productivity.",
    start_url: "/",
    display: "standalone",
    theme_color: "#0a0a0a",
    background_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
