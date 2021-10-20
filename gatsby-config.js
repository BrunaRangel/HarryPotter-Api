module.exports = {
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
