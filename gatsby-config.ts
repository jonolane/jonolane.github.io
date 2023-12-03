import type { GatsbyConfig } from "gatsby";

// require('dotenv').config();

// works on dev server but not on production build
/*
require('dotenv').config({
  path: process.env.NODE_ENV === 'Production' ? '.env.production' : '.env.development',
});
*/

/*
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
*/

const config: GatsbyConfig = {
  // no pathPrefix necessary for GitHub Pages when using 'npm run deploy' script
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
