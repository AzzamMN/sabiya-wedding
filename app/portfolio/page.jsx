import { client } from '@/sanity/client';
import PortfolioGallery from './PortfolioGallery';

export const revalidate = 60; // revalidate cache every 60 seconds

export default async function PortfolioPage() {
  let portfolioItems = [];
  try {
    const query = `*[_type == "portfolio"] | order(date desc, _createdAt desc) {
      _id,
      title,
      category,
      "imageUrl": image.asset->url,
      description,
      date
    }`;
    portfolioItems = await client.fetch(query);
  } catch (error) {
    console.error("Failed to fetch portfolio from Sanity:", error);
  }

  return <PortfolioGallery initialItems={portfolioItems} />;
}
