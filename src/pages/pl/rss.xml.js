import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { getSiteMetadata } from "../../consts";

export async function GET(context) {
  const metadata = getSiteMetadata("pl");
  const posts = (await getCollection("blog")).filter(
    (post) => post.data.lang === "pl"
  );
  return rss({
    title: metadata.title.default,
    description: metadata.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/pl/blog/${post.id}/`,
    })),
  });
}
