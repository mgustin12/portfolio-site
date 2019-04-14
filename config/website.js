const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Matt Gustin - Front-End Engineer", // Navigation and Site Title
  siteTitleAlt: "Matt", // Alternative Site title for SEO
  siteTitleShort: "Portfolio", // short_name for manifest
  siteHeadline: "Building web application systems with ReactJS", // Headline for schema.org JSONLD
  siteUrl: "https://www.mattgustin.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Matt Gustin - Portfilio Site",
  author: "Matt Gustin", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@MattGustinJS", // Twitter Username
  // ogSiteName: "", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  // googleAnalyticsID: "UA-",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
