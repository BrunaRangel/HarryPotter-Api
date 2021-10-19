module.exports = {
  siteMetadata: {
    title: `Harry Potter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName:"alldata",
        fieldName:"alldata",
        url:"https://api-us-east-1.graphcms.com/v2/ckuajidun4zgo01yzfo2ud7g2/master",
      },
    },
  ],
}
