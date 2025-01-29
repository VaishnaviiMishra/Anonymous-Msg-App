import {z}  from "zod"

export const messageSchema = z.object({
  content:z
  .string()
  .min(10,{message:'Content must be at least of 10 charaters'})
  .max(400,{message:'Content must be no longer then 400 charaters'})
})