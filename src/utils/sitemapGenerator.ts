const generateSitemap = () => {
  const baseUrl = window.location.origin;
  const pages = [
    { url: "/bmi", lastmod: new Date().toISOString(), priority: "0.8" },
    { url: "/mortgage", lastmod: new Date().toISOString(), priority: "0.8" },
    { url: "/converter", lastmod: new Date().toISOString(), priority: "0.8" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return xml;
};

export default generateSitemap;
