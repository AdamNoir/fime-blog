import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";


const blog = defineCollection({
   loader: glob({pattern: '*.md', base: 'src/content/blog'}),
    schema: () => z.object({
        
        title: z.string(),
        author: z.string(),
        desc: z.string(),
        date: z.date(),
        type: z.string()
    })
});



export const collections = {
    blog
}
