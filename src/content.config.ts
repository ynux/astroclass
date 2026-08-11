import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    title: z.string(),
    fromdate: z.string(),
    todate: z.string(),
    industry: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    tasks: z.array(z.string()),
    roles: z.string(),
    skills: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
