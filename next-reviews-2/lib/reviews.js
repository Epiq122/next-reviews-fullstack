import { readdir, readFile } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import qs from "qs";

export async function getFeaturedReviews() {
  const reviews = await getReviews();
  return reviews[0];
}

//    slug: 'hollow-knight',
//     title: 'Hollow Knight',
//     date: '2023-11-05',
//     image: '/images/hollow-knight.jpg',
export async function getReview(slug) {
  const url =
    "http://localhost:1337/api/reviews?" +
    qs.stringify(
      {
        fields: ["slug", "title", "subtitle", "publishedAt"],
        populate: {
          image: {
            fields: ["url", "width", "height", "alt"],
          },
        },
        sort: "publishedAt:desc",
        pagination: {
          pageSize: 6,
        },
      },
      { encodeValuesOnly: true }
    );
  console.log("getReview url", url);
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    date: attributes.publishedAt,
  }));
}

export async function getReviews() {
  const slugs = await getSlugs();
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  // // Sort reviews by date
  // reviews.sort((a, b) => b.date.localeCompare(a.date));

  return reviews;
}

export async function getSlugs() {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
