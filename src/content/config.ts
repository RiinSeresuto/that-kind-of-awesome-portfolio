import { z, defineCollection } from "astro:content";

const homeCollection = defineCollection({
    type: 'content',
    schema: z.object({
        heroTitle: z.string(),
        heroSubTitle: z.string(),
        heroSkills: z.array(z.string()),
        aboutSummary: z.string(),
    })
})

export const collections = {
    'home' : homeCollection
}