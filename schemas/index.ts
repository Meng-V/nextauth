import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "You have to give a valid email address.",
  }),
  password: z.string(),
  // password: z.string().min(6, {
  //     message: "Password is required"
  // })
});
