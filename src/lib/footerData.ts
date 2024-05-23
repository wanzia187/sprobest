// footerData.ts
interface Link {
  title: string;
  url: string;
  icon?: string;
}

export const logo = "src/lib/images/logo.png";

export const socialLinks: Link[] = [
  {
    title: "Twitter",
    url: "https://twitter.com/yourcompany",
    icon: "<svg>...</svg>",
  },
  {
    title: "GitHub",
    url: "https://github.com/yourcompany",
    icon: "<svg>...</svg>",
  },
  // Add more social links as needed
];

export const productLinks: Link[] = [
  { title: "Feature 1", url: "/feature-1" },
  { title: "Feature 2", url: "/feature-2" },
  // Add more product links as needed
];

export const resourceLinks: Link[] = [
  { title: "Support", url: "/support" },
  { title: "System Status", url: "/system-status" },
  // Add more resource links as needed
];

export const developerLinks: Link[] = [
  { title: "Documentation", url: "/documentation" },
  { title: "Changelog", url: "/changelog" },
  // Add more developer links as needed
];

export const companyLinks: Link[] = [
  { title: "Blog", url: "/blog" },
  { title: "Customer Stories", url: "/customer-stories" },
  // Add more company links as needed
];
