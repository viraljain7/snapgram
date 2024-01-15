import * as z from "zod";
export const SignupValidation = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(3, {
    message: "name must be at least 3 characters.",
  }),
  email: z.string().email(),
  passwaord: z.string().min(8, {
    message: "Passsword must be at least 8 characters.",
  }),
});
