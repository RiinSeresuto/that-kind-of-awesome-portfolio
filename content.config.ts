import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: "page",
            source: "projects/*.md",
            schema: z.object({
                title: z.string(),
                category: z.string(),

                description: z.string().optional(),
                company: z.string().optional(),

                stacks: z.array(z.string()),

                responsibilities: z
                    .array(z.string())
                    .optional(),

                screenshot: z.string().optional(),
            }),
        }),
    },
});