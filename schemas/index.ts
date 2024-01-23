import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "You have to give a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "You have to give a valid email address.",
  }),
  password: z.string().min(2, {
    message: "Minimum 2 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
