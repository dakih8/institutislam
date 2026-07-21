import { defineCollection, z } from 'astro:content';

// Shared schema used by every knowledge category. Kept intentionally simple
// so a non-developer can fill it in through the Decap CMS admin UI without
// needing to understand the underlying markdown/frontmatter format.
const entrySchema = z.object({
  title: z.string(),
  summary: z.string(),
  source: z.string().optional(),      // e.g. book / narrator / reference
  tags: z.array(z.string()).optional(),
  order: z.number().optional(),       // manual ordering within a category
  publishDate: z.date().optional(),
});

const tafseer = defineCollection({ type: 'content', schema: entrySchema });
const hadith = defineCollection({ type: 'content', schema: entrySchema });
const aqidah = defineCollection({ type: 'content', schema: entrySchema });
const fiqh = defineCollection({ type: 'content', schema: entrySchema });
const ethics = defineCollection({ type: 'content', schema: entrySchema });
const sira = defineCollection({ type: 'content', schema: entrySchema });

export const collections = { tafseer, hadith, aqidah, fiqh, ethics, sira };
