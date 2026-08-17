import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    slug: z.string(),
    showInProjects: z.boolean(),
    title: z.string(),
    fromdate: z.string(),
    todate: z.string(),
    industry: z.string(),
    description: z.string(),
    tasks: z.array(z.string()),
    roles: z.string(),
    skills: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const timelineCollection = defineCollection({
  loader: file("src/data/cv.json"),
  schema: z.object({
    slug: z.string(),
    company: z.string(),
    showInTimeline: z.boolean(),
    title: z.string(),
    fromdate: z.string(),
    todate: z.string(),
    industry: z.string(),
    description: z.string(),
    tasks: z.array(z.string()),
    roles: z.string(),
    skills: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
