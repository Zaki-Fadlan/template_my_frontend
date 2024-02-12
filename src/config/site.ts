export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Front End Dashboard",
  navItems: [
    {
      label: "Page 1",
      href: "/",
    },
    {
      label: "Page 2",
      href: "/example",
    },
    {
      label: "Page 3",
      href: "/page3",
    },
    {
      label: "Page 4",
      href: "/page4",
    },
    {
      label: "Dropdown Page",
      // href: "/page5",
      submenu: [
        {
          label: "Latest Posts",
          href: "/About/latest",
        },
        {
          label: "Popular Posts",
          href: "/About/popular",
        },
      ],
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  userMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
