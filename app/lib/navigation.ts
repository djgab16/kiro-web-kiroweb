export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/why-kiro", label: "Why Kiro" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/demo", label: "Demo" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks: Record<string, NavLink[]> = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/demo", label: "Demo" },
    { href: "/tutorials", label: "Tutorials" },
  ],
  Community: [
    { href: "/community", label: "Community" },
    { href: "/resources", label: "Resources" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/why-kiro", label: "Why Kiro" },
  ],
};
