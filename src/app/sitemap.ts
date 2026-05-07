import { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/catalog";

const baseUrl = "https://poolproandlab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/lab", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/book-lab-test", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/service", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/shop", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/shop/all", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/contactus", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/franchise-concept", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/benefits", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/howtoapply", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/faqs", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/business-contact", priority: 0.5, changeFrequency: "monthly" as const },
    ...CATEGORIES.map((cat) => ({
      url: `/shop/category/${cat.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
