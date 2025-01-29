import {z} from 'zod'

export const usernameValidation = z
  .string()
  .min(2,"Username must be atleast 2 character")
  .max(20,"Username must be no more than 20 character")
  .regex(/^[a-zA-Z0-9]+$/,"Username must not contain special charaters")

export const signUpSchema = z.object({
  username:usernameValidation,
  email:z.string().email({message:'Invalid email address'}),
  password:z.string().min(6,{message:"password must be at least 6 Charater"})
})