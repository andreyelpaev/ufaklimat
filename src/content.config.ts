import { defineCollection, z } from 'astro:content';

const text = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = { text };
