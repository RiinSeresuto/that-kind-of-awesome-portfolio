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
        stacks: z.array(z.string()),
        tags: z.array(z.string()),
        publishDate: z.date()
    })
})

export const collections = {
    'projects' : projectCollection
}