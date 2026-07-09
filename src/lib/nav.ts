export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "MODELS", href: "/models" },
  { label: "DESIGN", href: "/design" },
  { label: "FLEET", href: "/fleet" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "ABOUT", href: "/about" },
  { label: "PRIVACY", href: "/privacy" },
  { label: "UPDATES", href: "/updates" },
  { label: "SUPPORT", href: "/support" },
  { label: "RESOURCES", href: "/resources" },
];
