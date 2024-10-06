import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // slug: z.string(),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        demo: z.union([z.string(), z.boolean()]),
        sourceCode: z.union([z.string(), z.boolean()]),
        stacks: z.array(z.string()),
        tags: z.array(z.string()),
        publishDate: z.date(),
    })
})

const workExperienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        position: z.string(),
        organization: z.string(),
        address: z.string(),
        period: z.string(),
    })
})

export const collections = {
    'projects' : projectCollection,
    'work-experience' : workExperienceCollection
}