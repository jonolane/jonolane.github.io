import type { GatsbyConfig } from "gatsby";

// require('dotenv').config();

require('dotenv').config({
  path: process.env.NODE_ENV === 'Production' ? '.env.production' : '.env.development',
});

const config: GatsbyConfig = {
  // pathPrefix: '/public',
  siteMetadata: {
    title: `Jono Lane`,
    siteUrl: `https://www.jonolane.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
