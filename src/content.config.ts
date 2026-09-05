import { glob } from 'astro/loaders';
import { defineCollection } from 'astro/content/config';

import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/posts/blog' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
    }),
});

const daily = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/posts/daily' }),
    schema: z.object({
        date: z.date(),
    }),
});

const notes = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/posts/notes' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = { blog, daily, notes };
