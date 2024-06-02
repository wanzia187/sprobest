// footerData.ts
interface Link {
    title: string;
    url: string;
    icon?: string;
}

export const logo = "src/lib/images/logo.png";

export const socialLinks: Link[] = [
    {
        title: "Facebook",
        url: "https://www.facebook.com/sprobest",
        icon: "<svg\n" +
            "                xmlns=\"http://www.w3.org/2000/svg\"\n" +
            "                width=\"24\"\n" +
            "                height=\"24\"\n" +
            "                viewBox=\"0 0 24 24\"\n" +
            "                fill=\"none\"\n" +
            "                stroke=\"white\"\n" +
            "                stroke-width=\"2\"\n" +
            "                stroke-linecap=\"round\"\n" +
            "                stroke-linejoin=\"round\"\n" +
            "                class=\"feather feather-instagram\"\n" +
            "        >\n" +
            "          <rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect>\n" +
            "          <path\n" +
            "                  d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"\n" +
            "          >\n" +
            "\n" +
            "          </path>\n" +
            "          <line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>\n" +
            "        </svg>",
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/sprobest",
        icon: "        <svg\n" +
            "                xmlns=\"http://www.w3.org/2000/svg\"\n" +
            "                width=\"24\"\n" +
            "                height=\"24\"\n" +
            "                viewBox=\"0 0 24 24\"\n" +
            "                fill=\"none\"\n" +
            "                stroke=\"white\"\n" +
            "                stroke-width=\"2\"\n" +
            "                stroke-linecap=\"round\"\n" +
            "                stroke-linejoin=\"round\"\n" +
            "                class=\"feather feather-instagram\"\n" +
            "        >\n" +
            "          <title>Facebook icon</title>\n" +
            "          <path d=\"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z\" />\n" +
            "          <line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>\n" +
            "        </svg>",
    },
    {
        title: "YouTube",
        url: "https://www.youtube.com/@sprobestmedia1751",
        icon: "        <svg\n" +
            "                xmlns=\"http://www.w3.org/2000/svg\"\n" +
            "                width=\"24\"\n" +
            "                height=\"24\"\n" +
            "                viewBox=\"0 0 24 24\"\n" +
            "                fill=\"none\"\n" +
            "                stroke=\"white\"\n" +
            "                stroke-width=\"2\"\n" +
            "                stroke-linecap=\"round\"\n" +
            "                stroke-linejoin=\"round\"\n" +
            "                class=\"feather feather-youtube\"\n" +
            "        >\n" +
            "          <path\n" +
            "                  d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"\n" +
            "          ></path>\n" +
            "          <polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>\n" +
            "        </svg>",
    },
    {
        title: "LinkedIn",
        url: "https://zm.linkedin.com/company/sprobest-media",
        icon: "        <svg\n" +
            "                xmlns=\"http://www.w3.org/2000/svg\"\n" +
            "                width=\"24\"\n" +
            "                height=\"24\"\n" +
            "                viewBox=\"0 0 24 24\"\n" +
            "                fill=\"none\"\n" +
            "                stroke=\"white\"\n" +
            "                stroke-width=\"2\"\n" +
            "                stroke-linecap=\"round\"\n" +
            "                stroke-linejoin=\"round\"\n" +
            "                class=\"feather feather-linkedin\"\n" +
            "        >\n" +
            "          <path\n" +
            "                  d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"\n" +
            "          >\n" +
            "            \n" +
            "          </path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect>\n" +
            "          <circle\n" +
            "                  cx=\"4\"\n" +
            "                  cy=\"4\"\n" +
            "                  r=\"2\">\n" +
            "          </circle>\n" +
            "        </svg>"
    }
];

export const productLinks: Link[] = [
    {title: "Social Events", url: "/services"},
    {title: "Corporate Events", url: "/services"},
    {title: "Cinematic Podcast", url: "/services"},
    {title: "Aerial Shots", url: "/services"},
    // Add more product links as needed
];

export const resourceLinks: Link[] = [
    {title: "Support", url: "/support"},
    {title: "System Status", url: "/system-status"},
    // Add more resource links as needed
];

export const developerLinks: Link[] = [
    {title: "Documentation", url: "/documentation"},
    {title: "Changelog", url: "/changelog"},
    // Add more developer links as needed
];

export const companyLinks: Link[] = [
    {title: "About Us", url: "/about"},
    {title: "Contact Us", url: "/contact"},
    // Add more company links as needed
];
