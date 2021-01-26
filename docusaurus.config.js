module.exports = {
  title: 'GetCert',
  tagline: 'The tagline of GetCert',
  url: 'https://getcert.org',
  // baseUrl: '/getcert.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'getcert', // Usually your GitHub org/user name.
  projectName: 'getcert.org', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-WZWWQZXG6X',
      anonymizeIP: false,
    },
    navbar: {
      title: 'GetCert',
      logo: {
        alt: 'GetCert Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/getcert/getcert.org',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Get Involved",
          items: [
            // {
            //   label: "Getting Started",
            //   to: "getting-started",
            // },
            // {
            //   label: "Scripts",
            //   to: "scripts",
            // },
            // {
            //   label: "Roadmap",
            //   to: "roadmap",
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/getcert',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/getcert',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/getcert',
            // },
          ],
        },
        {
          title: 'Sponsors',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/getcert/getcert',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. All rights reserved.`
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/getcert/getcert.org/edit/main',
            routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/getcert/getcert.org/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
