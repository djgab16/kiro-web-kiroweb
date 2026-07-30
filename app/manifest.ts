import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION, THEME_COLOR } from "./lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Kiro Hub",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: THEME_COLOR,
    theme_color: THEME_COLOR,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["developer tools", "education", "productivity"],
    orientation: "portrait-primary",
    prefer_related_applications: false,
    scope: "/",
    lang: "en",
    dir: "ltr",
    shortcuts: [
      {
        name: "Tutorials",
        short_name: "Tutorials",
        url: "/tutorials",
      },
      {
        name: "Features",
        short_name: "Features",
        url: "/features",
      },
      {
        name: "Community",
        short_name: "Community",
        url: "/community",
      },
    ],
  };
}
