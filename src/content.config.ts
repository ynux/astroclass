import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const project = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    title: z.string(),
    industry: z.string(),
    datefrom: z.string().date(),
    dateto: z.string().date(),
    description: z.string().optional(),
    image: z.string(),
    slug: z.string(),
    skills: z.array(z.string()),
  }),
});

export const collections = { project };
