import { z } from 'zod'

export const searchBarFormSchema = z.object({
  titleLike: z.string().trim(),
})
