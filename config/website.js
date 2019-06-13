const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Editting made modern.', // Navigation and Site Title
  siteTitleAlt: 'Madeline Jaffe', // Alternative Site title for SEO
  siteTitleShort: 'Madeline Jaffe', // short_name for manifest
  siteHeadline: 'Editting made modern.', // Headline for schema.org JSONLD
  siteUrl: 'https://jaffe.software', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Foo',
  author: 'Jacob Jaffe', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@cara', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.red,
  backgroundColor: tailwind.colors.purple,
}
