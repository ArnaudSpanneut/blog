const SITE_URL = "https://www.arnaudspanneut.com/"

module.exports = {
  siteMetadata: {
    title: `Blog - Arnaud Spanneut`,
    author: {
      name: `Arnaud Spanneut`,
      summary: `
        10 years software engineer 👨‍💻
        I like crafting delightful products 💎 and lead teams to thrive.
      `,
    },
    description: `
      I'm writing about global software company topics.
      Sometime technical, sometime organizationnal.
    `,
    siteUrl: SITE_URL,
    social: {
      twitter: `https://twitter.com/ArnaudSpanneut`,
      linkedIn: `https://www.linkedin.com/in/arnaud-spanneut-23150135/`,
      github: `https://github.com/ArnaudSpanneut`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arnaud Spanneut Blog`,
        short_name: `ArnaudSpanneut`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/arnaud-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: SITE_URL,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-4DX464TWS0"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
