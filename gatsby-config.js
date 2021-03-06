module.exports = {
  siteMetadata: {
    title: 'Prizy | Larissa Developers meetup',
    meta: {
      description: 'Prizy is an app used for meetup lotteries',
      keywords: 'Prizy, Larissa Developers',
    },
    menuLinks: [
      {
        name: 'Meetup',
        link: 'https://www.meetup.com/Larissa-Developers-Meetup/',
      },
      {
        name: 'Social',
        link: '/',
      },
      {
        name: 'Explore Prizy',
        link: '/',
      },
    ],
  },
  pathPrefix: '/prizy_landing',
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-preset-env')({ stage: 0 }),
          'postcss-import',
          'postcss-mixins',
          'postcss-nested',
          'postcss-simple-vars',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#950104',
        theme_color: '#950104',
        display: 'minimal-ui',
        icon: 'src/images/larissa-developers-icon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
