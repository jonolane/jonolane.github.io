import type { GatsbyConfig } from "gatsby";

// works on dev server but not on production build
/*
require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production',
});
*/

// working ? feels more dynamic
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jono Lane`,
    siteUrl: `https://www.jonolane.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },]
};

export default config;
