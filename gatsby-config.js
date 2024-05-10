module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
	  {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'mossandiamond.com ¨C Mossan Diamond Brand Moissanite Jewelry Store',
        short_name: '?? Mossan Diamond Moissanite Jewelry',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
