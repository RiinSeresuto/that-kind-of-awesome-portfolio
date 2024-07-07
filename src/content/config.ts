import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        stacks: z.array(z.string()),
        tags: z.array(z.string()),
    })
})

export const collections = {
    'projects' : projectCollection
}