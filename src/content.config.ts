import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "data", // oder 'content' falls du Markdown/MDX nutzt
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    link: z.string().url(),
    // Neue angeforderte Felder:
    slug: z.string(),
    image: z.string(),
    industry: z.string(),
    dateRange: z.object({
      fromDate: z.string(), // z.B. "2024-01" oder "Jan 2024"
      toDate: z.string(), // z.B. "2025-06" oder "now"
    }),
  }),
});

export const collections = {
  projects: projectsCollection,
};
