// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "WooCommerce Access Passes - Time-Based Access Management";
export const SITE_DESCRIPTION =
  "Transform your WooCommerce store into a sophisticated time-based access management system. Stackable access periods, flexible groups, and no recurring billing complexity.";

export const GITHUB_URL = "https://accesspasses.com/get";

export const SITE_METADATA = {
  title: {
    default: "WooCommerce Access Passes - Time-Based Access Management",
    template: "%s | Access Passes",
  },
  description:
    "Stackable time-based access for WooCommerce. Simple purchases that grant time. Perfect for courses, memberships, and digital products.",
  keywords: [
    "WooCommerce",
    "WooCommerce plugin",
    "WordPress plugin",
    "access management",
    "time-based access",
    "digital products",
    "membership plugin",
    "course access",
    "stackable subscriptions",
    "access passes",
    "WooCommerce membership",
    "digital access",
    "subscription alternative",
  ],
  authors: [{ name: "Access Passes" }],
  creator: "Access Passes",
  publisher: "Access Passes",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "WooCommerce Access Passes - Time-Based Access Management",
    description:
      "Stackable time-based access for WooCommerce. Simple purchases that grant time. Perfect for courses, memberships, and digital products.",
    siteName: "Access Passes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WooCommerce Access Passes - Time-Based Access Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WooCommerce Access Passes - Time-Based Access Management",
    description:
      "Stackable time-based access for WooCommerce. Simple purchases that grant time. Perfect for courses, memberships, and digital products.",
    images: ["/og-image.jpg"],
    creator: "@accesspasses",
  },
};
